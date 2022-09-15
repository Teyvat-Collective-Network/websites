import { users as schemas } from '../schemas.js';


export default function(fastify, opts, done) {
  fastify.get('/', async (request, reply) => {
    const docs = await fastify.db.users.find({});
    return reply.send(docs.map(doc => doc.toObject()));
  });

  fastify.post('/', { schema: schemas.post }, async (request, reply) => {
    if (!request.access(u => u.roles.includes('observer'))) return reply.code(403).send();
    if (await fastify.db.users.exists({ id: request.body.id })) return reply.code(409).send();
    const doc = await fastify.db.users.create(request.body);
    return reply.send(doc.toObject());
  });

  fastify.get('/:user', { schema: schemas.get }, async (request, reply) => {
    const doc = await fastify.db.users.findOne({ id: request.params.user });
    if (!doc) return reply.code(404).send();
    return reply.send(doc.toObject());
  });

  fastify.patch('/:user', { schema: schemas.patch }, async (request, reply) => {
    if (!request.access(u => u.roles.includes('observer'))) return reply.code(403).send();
    const doc = await fastify.db.users.findOne({ id: request.params.user });
    if (!doc) return reply.code(404).send();
    const updated = await fastify.db.users.findByIdAndUpdate(doc._id, request.body, { new: true });
    return reply.send(updated.toObject());
  });

  fastify.delete('/:user', { schema: schemas.delete }, async (request, reply) => {
    if (!request.access(u => u.roles.includes('observer'))) return reply.code(403).send();
    const doc = await fastify.db.users.findOne({ id: request.params.user });
    if (!doc) return reply.code(404).send();
    await doc.deleteOne();
    return reply.send(doc.toObject());
  });


  fastify.put('/:user/guilds', { schema: schemas.guilds.put }, async (request, reply) => {
    if (!request.access(async u => u.roles.includes('observer') 
      || await fastify.db.guilds.exists({ id: request.body.guild, owner: u.id })
    )) return reply.code(403).send();
    const doc = await fastify.db.users.findOneAndUpdate(
      { id: request.params.user },
      { $addToSet: { guilds: request.body.guild } },
      { upsert: true, new: true }
    );
    return reply.send(doc.toObject());
  });

  fastify.delete('/:user/guilds', { schema: schemas.guilds.delete }, async (request, reply) => {
    if (!request.access(async u => u.roles.includes('observer') 
      || await fastify.db.guilds.exists({ id: request.body.guild, owner: u.id })
    )) return reply.code(403).send();
    if (await fastify.db.guilds.exists({ $or: [
      { id: request.body.guild, owner: request.params.user },
      { id: request.body.guild, advisor: request.params.user },
    ] })) return reply.code(409).send();
    const doc = await fastify.db.users.findOne({ id: request.params.user });
    if (!doc) return reply.code(204).send();
    const updated = await doc.findByIdAndUpdate(doc._id, { $pull: { guilds: request.body.guild } }, { new: true });
    return reply.send(updated.toObject());
  });


  fastify.put('/:user/roles', { schema: schemas.roles.put }, async (request, reply) => {
    if (!request.access(u => u.roles.includes('observer'))) return reply.code(403).send();
    if (['owner', 'advisor', 'voter'].includes(request.body.role)) return reply.code(400).send(new Error('that role may not be assigned through this endpoint'));
    const doc = await fastify.db.users.findOneAndUpdate(
      { id: request.params.user },
      { $addToSet: { roles: request.body.role } },
      { upsert: true, new: true }
    );
    return reply.send(doc.toObject());
  });

  fastify.delete('/:user/roles', { schema: schemas.roles.delete }, async (request, reply) => {
    if (!request.access(u => u.roles.includes('observer'))) return reply.code(403).send();
    if (request.body.role === 'owner') return reply.code(400).send(new Error('that role may not be removed through this endpoint'));
    if (['advisor', 'voter'].includes(request.body.role)) await fastify.db.guilds.updateMany(
      { [request.body.role]: request.params.user },
      { [request.body.role]: null }
    );
    const doc = await fastify.db.users.findOne({ id: request.params.user });
    if (!doc) return reply.code(204).send();
    const updated = await fastify.db.users.findByIdAndUpdate(doc._id, { $pull: { roles: request.body.role } }, { new: true });
    return reply.send(updated.toObject());
  });

  
  done();
}
