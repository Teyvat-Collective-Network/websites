import fastifyStatic from '@fastify/static';
import { resolve } from 'path';

export default function (fastify, options, done) {
  fastify.register(fastifyStatic, { root: resolve('frontend/public/') });

  fastify.get('/', async (_, reply) => {
    return reply.sendFile('index.html');
  });

  done();
}