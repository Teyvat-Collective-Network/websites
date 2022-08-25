import { api as schemas } from '../schemas.js';
import validator from '../../shared/validation.js';
import Form from '../../shared/form.js';
import { TYPES as INTERACTION_TYPES } from './interactions.js';


function sendInteraction(interaction, url = '/interactions') {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(interaction),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.ok ? res.json() : undefined);
}


export default function (fastify, options, done) {
  const { database } = options;

  fastify.decorateRequest('user', {
    id: '659488296820408355',
    roles: 3,
  });


  fastify.get('/forms', async (req, rep) => {
    const forms = await database.forms.find({ $or: [
      { flags: { $bitsAllClear: Form.FLAGS.PRIVATE } },
      { owner: req.user?.id },
    ] });

    return rep.send(forms.map(form => ({
      ...form,
      canEdit: req.user?.id === form.owner,
    })));
  });


  fastify.post('/forms', { schema: schemas.forms.post }, async (req, rep) => {
    const form = {
      id: req.body.id,
      owner: req.user.id,
      name: req.body.name || '',
      description: req.body.description || '',
      interactions: req.body.interactions || '',
      flags: req.body.flags || 0,
    }

    if (!validator.form(form)) return rep.code(400).send();
    await database.forms.create(form);
    return rep.code(204).send();
  });


  fastify.get('/forms/:id', async (req, rep) => {
    const form = await database.findOne({ $or: [
      { _id: req.params.id },
      { id: req.params.id },
    ] });
    if (!form) return rep.code(404).send();
    
    const body = await sendInteraction({
      type: INTERACTION_TYPES.BODY_REQUEST,
      form: form._id,
      user: req.user,
    }, form.interactions);
    if (!body) return rep.code(404).send();

    return rep.send({
      ...form.toObject(),
      canEdit: req.user?.id === form.owner,
      body,
    });
  });

  fastify.post('/forms/:id', async (req, rep) => {
    const form = await database.findOne({ $or: [
      { _id: req.params.id },
      { id: req.params.id },
    ] });
    if (!form) return rep.code(404).send();
    
    const body = await sendInteraction({
      type: INTERACTION_TYPES.BODY_REQUEST,
      form: form._id,
      user: req.user,
    }, form.interactions);
    if (!body) return rep.code(404).send();

    if (!validator.submission(req.body, {
      ...form.toObject(),
      canEdit: req.user?.id === form.owner,
      body,
    })) return rep.code(400).send();

    const submission = await sendInteraction({
      type: INTERACTION_TYPES.SUBMISSION,
      form: form._id,
      user: req.user,
      values: req.body.values,
    }, form.interactions);
    if (!submission) return rep.code(404).send();

    return rep.code(204).send();
  });


  done();
}