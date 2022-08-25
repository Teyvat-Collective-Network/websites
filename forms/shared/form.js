export const FIELD_TYPES = {
  NONE: 0,
  TEXT: 1,
  MULTILINE: 2,
  LIST: 3,
  SELECT: 4,
  ORDER: 5,
  CHECKBOX: 6,
  FILE: 7,
}

export const FLAGS = {
  DYNAMIC: 1<<0,
  PRIVATE: 1<<1,
}


export function getFieldOptions(field) {
  return field.options.map(option => typeof option === 'object' ? option : { name: `${option}`, value: option });
}


export default {
  FIELD_TYPES,
  FLAGS,
  getFieldOptions,
}