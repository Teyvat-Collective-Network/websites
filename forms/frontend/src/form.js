import form from '../../shared/form.js';


export const NAMES = {
  [form.FIELD_TYPES.NONE]: 'No Input',
  [form.FIELD_TYPES.TEXT]: 'Single-line Text',
  [form.FIELD_TYPES.MULTILINE]: 'Multiline Text',
  [form.FIELD_TYPES.LIST]: 'Custom List',
  [form.FIELD_TYPES.SELECT]: 'Select',
  [form.FIELD_TYPES.ORDER]: 'Order',
  [form.FIELD_TYPES.CHECKBOX]: 'Checkbox',
  [form.FIELD_TYPES.FILE]: 'File(s)',
}


export async function getValueTree(fields) {
  const values = {};
  
  for (const field of fields) {
    if (field.type === form.FIELD_TYPES.NONE) return;
    const value = typeof field.value === 'function' ? await field.value() : field.value;
    values[field.id || field.name] = value;
  }

  return values;
}


export const empty = {
  form: () => ({
    id: '',
    name: '',
    description: '',
    flags: 0,
    canEdit: true,
    body: {
      title: '',
      description: '',
      fields: [],
    },
  }),

  field: () => ({
    type: form.FIELD_TYPES.TEXT,
    name: '',
    description: '',
  }),
}


export * from '../../shared/form.js';
export default {
  ...form,
  NAMES,
  getValueTree,
  empty,
}