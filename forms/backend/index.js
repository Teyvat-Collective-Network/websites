import Fastify from 'fastify';
import 'dotenv/config';

import Database from './db/index.js';

import site from './routes/site.js';
import api from './routes/api.js';
import interactions from './routes/interactions.js';

const fastify = Fastify({
  ajv: {
    customOptions: {
      coerceTypes: false,
      removeAdditional: true,
    },
  },
});

const database = new Database(process.env.DATABASE_URI);

fastify.register(site, { database });
fastify.register(api, { database, prefix: '/api' });
fastify.register(interactions, { database, prefix: '/interactions' });

fastify.listen({
  port: process.env.PORT,
});