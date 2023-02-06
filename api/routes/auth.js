import oauth from '../lib/oauth.js';

export default function(fastify, opts, done) {
  fastify.get('/', async (request, reply) => {
    if (!request.query.code) return reply.redirect(
      `https://discord.com/oauth2/authorize?response_type=code&client_id=${process.env.DISCORD_ID}&scope=identify&redirect_uri=${encodeURIComponent(process.env.DISCORD_REDIRECT)}` 
      + (request.query.redirect ? `&state=${encodeURIComponent(request.query.redirect)}` : '')
    );

    const tokens = await oauth.token({
      client_id: process.env.DISCORD_ID,
      client_secret: process.env.DISCORD_SECRET,
      code: request.query.code,
      redirect_uri: process.env.DISCORD_REDIRECT,
    }).catch(console.error);
    if (!tokens) return reply.code(401).send();
    
    const user = await oauth.user(tokens).catch(console.error);
    if (!user) return reply.code(401).send();

    const jwt = fastify.jwt.sign({ id: user.id });

    reply.setCookie('token', jwt, { sameSite: 'lax', domain: process.env.COOKIE_DOMAIN });
    return reply.redirect(request.query.state || '/');
  });

  fastify.get('/token', async (request, reply) => {
    const user = await request.auth();
    if (!user) return reply.code(401).send();
    return reply.send({ id: user.id, token: request.headers.authorization || request.cookies.token });
  });

  fastify.get('/user', async (request, reply) => {
    const user = await request.auth();
    return reply.code(user ? 200 : 401).send(user);
  });

  fastify.get('/logout', async (request, reply) => {
    reply.clearCookie('token', { sameSite: 'lax', domain: process.env.COOKIE_DOMAIN });
    return reply.redirect(request.query.redirect || '/');
  });

  done();
}