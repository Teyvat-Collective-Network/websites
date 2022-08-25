export const TYPES = {
  BODY_REQUEST: 0,
  SUBMISSION: 1,
}


export default function (fastify, options, done) {
  const { database } = options;
  
  fastify.get('/', async (req, rep) => {
    switch(req.body.type) {
      case TYPES.BODY_REQUEST: {
        const body = await database.interactions.forms.findOne({ form: req.body.form });
        if (!body) return rep.code(404).send();

        return rep.send(body);
      }

      case TYPES.SUBMISSION: {
        const submission = await database.interactions.submissions.create(req.body);
        return rep.code(submission ? 204 : 500).send();
      }

      default: {
        return rep.code(400).send();
      }
    }
  });
  
  done();
}