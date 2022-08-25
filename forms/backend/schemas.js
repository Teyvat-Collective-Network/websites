export const api = {
  forms: {
    post: {
      body: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          description: { type: 'string' },
          interactions: { type: 'string' },
          flags: { type: 'integer' },
        },
        additionalProperties: false,
      }
    }
  }
}

const user = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    additionalProperties: false,
  },
}

export const interactions = {
  post: {
    body: {
      type: 'object',
      properties: {
        type: { type: 'integer' },
        form: { type: 'string' },
        values: { type: 'object' },
        user,
      },
      required: ['type', 'form', 'user'],
      additionalProperties: false,
    }
  }
}