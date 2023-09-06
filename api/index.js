import Database from './db/index.js';
import JWT from './lib/jwt.js';
import Fastify from 'fastify';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import 'dotenv/config';

import auth from './routes/auth.js';
import guilds from './routes/guilds.js';
import users from './routes/users.js';

const fastify = Fastify({
  ajv: { customOptions: {
    removeAdditional: true,
    coerceTypes: false,
  } },
});

fastify.decorate('db', new Database(process.env.DATABASE_URI));
fastify.decorate('jwt', new JWT(process.env.JWT_SECRET));

fastify.decorateRequest('auth', async function () {
  const payload = fastify.jwt.verify(this.headers.authorization || this.cookies.token);
  if (!payload) return;
  const user = await fastify.db.users.findOne({ id: payload.id });
  return user?.toObject() || payload;
});

fastify.decorateRequest('access', async function (f) {
  const user = await this.auth();
  console.log(user);
  return user && await f(user);
});

fastify.addHook('preSerialization', async function removeMongoStuff(request, reply, payload) {
  if (Array.isArray(payload)) return Promise.all(payload.map(item => removeMongoStuff(request, reply, item)));
  
  if (typeof payload === 'object') {
    const copy = { ...payload };
    delete copy._id;
    delete copy.__v;
    return copy;
  }

  return payload;
});

fastify.get('/', async (request, reply) => {
  return reply.send('online');
});

fastify.register(cookie);
fastify.register(cors);
fastify.register(auth, { prefix: '/auth' });
fastify.register(guilds, { prefix: '/guilds' });
fastify.register(users, { prefix: '/users' });

fastify.listen({ port: process.env.PORT }).then(() => console.log('ready!'));