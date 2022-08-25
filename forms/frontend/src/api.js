import { empty } from './form.js';

export const forms = {
  async previews() {
    return fetch('/api/forms').then(res => res.json());
  },

  async create(form) {
    return fetch('/api/forms', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());
  },

  async get(id) {
    return (id === 'new')
      ? empty.form() 
      : fetch(`/api/forms/${id}`).then(res => res.json());
  },

  async edit(id, form) {
    return fetch(`/api/forms/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());
  },

  async remove(id) {
    return fetch(`/api/forms/${id}`, {
      method: 'DELETE',
    }).then(res => res.json());
  },

  async submit() {
    //
  },
}


export default { forms };