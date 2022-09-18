import { guilds as schemas } from '../schemas.js';


export default function(fastify, opts, done) {
  async function updateRoles(before, after) {
    if (typeof after === 'boolean') {
      for (const role of ['owner', 'advisor', 'voter']) await fastify.db.users.updateOne(
        { id: before[role] },
        after
          ? { $addToSet: { roles: role, guilds: before.id } }
          : { $pull: { roles: role } },
        { upsert: after }
      );
      return;
    }

    for (const role of ['owner', 'advisor', 'voter']) {
      if (before[role] === after[role]) continue;
      after[role] && await fastify.db.users.updateOne(
        { id: after[role] },
        { $addToSet: { roles: role, guilds: before.id } },
        { upsert: true }
      );
      if (!await fastify.db.guilds.exists({ [role]: before[role] })) await fastify.db.users.updateOne({ id: before[role] }, { $pull: { roles: role } });
    }
  }


  fastify.get('/', async (request, reply) => {
    const docs = await fastify.db.guilds.find({});
    return reply.send(docs.map(doc => doc.toObject()));
  });

  fastify.post('/', { schema: schemas.post }, async (request, reply) => {
    if (!request.access(u => u.roles.includes('observer'))) return reply.code(403).send();
    if (await fastify.db.guilds.exists({ id: request.body.id })) return reply.code(409).send();
    const doc = await fastify.db.guilds.create(request.body);
    await updateRoles(doc, true);
    return reply.code(201).send(doc.toObject());
  });

  fastify.get('/:guild', { schema: schemas.get }, async (request, reply) => {
    const doc = await fastify.db.guilds.findOne({ id: request.params.guild });
    if (!doc) return reply.code(404).send();
    return reply.send(doc.toObject());
  });

  fastify.patch('/:guild', { schema: schemas.get }, async (request, reply) => {
    if (!request.access(u => u.roles.includes('observer'))) return reply.code(403).send();
    const doc = await fastify.db.guilds.findOne({ id: request.params.guild });
    if (!doc) return reply.code(404).send();
    const updated = await fastify.db.guilds.findByIdAndUpdate(doc._id, request.body, { new: true });
    await updateRoles(doc, updated);
    return reply.send(updated.toObject());
  });

  fastify.delete('/:guild', { schema: schemas.delete }, async (request, reply) => {
    if (!request.access(u => u.roles.includes('observer'))) return reply.code(403).send();
    const doc = await fastify.db.guilds.findOne({ id: request.params.guild });
    if (!doc) return reply.code(404).send();
    await doc.deleteOne();
    await updateRoles(doc, false);
    return reply.send(doc.toObject());
  });


  done();
}
