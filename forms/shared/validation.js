import Form from './form.js';


const check = {
  type(value, type) {
    return type === 'array' ? Array.isArray(value) : typeof value === type;
  },

  between(value, min, max) {
    return (!min || value >= min) && (!max || value <= max);
  },

  unorderedEqual(a, b) {
    const _a = a.sort();
    const _b = b.sort();
    return _a.every((v,i) => _b[i] === v);
  }
}


export default {
  submission(submission, form) {
    return check.type(submission?.values, 'object')
      && form.fields.map(field => {
        const value = submission.values[field.id];
        return value
          ? this.submissionField(value, field)
          : !field.required;
      }).every(_=>_);
  },

  submissionField(value, field) {
    switch (field.type) {
      case Form.FIELD_TYPES.NONE: return false;

      case Form.FIELD_TYPES.TEXT:
      case Form.FIELD_TYPES.MULTILINE: {
        return check.type(value, 'string')
          && check.between(value, field.min_length, field.max_length);
      }
      
      case Form.FIELD_TYPES.LIST: {
        return check.type(value, 'array') 
          && check.between(value.length, field.min_values, field.max_values)
          && value.every(item => check.type(item, 'string')
            && check.between(item.length, field.min_length, field.max_length)
          );
      }

      case Form.FIELD_TYPES.CHOICE: {
        return Form.getFieldOptions(field).some(o => o.value === value);
      }

      case Form.FIELD_TYPES.ORDER: {
        return check.type(value, 'array')
          && check.unorderedEqual(value, Form.getFieldOptions(field).map(o => o.value));
      }

      case Form.FIELD_TYPES.CHECKBOX: {
        return check.type(value, 'boolean');
      }

      case Form.FIELD_TYPES.FILE: {
        return check.type(value, 'array')
          && check.between(value.length, field.min_files, field.max_files)
          && value.every(file => check.type(file, 'object')
            && check.unorderedEqual(Object.keys(file), ['name', 'data'])
            && check.type(file.name, 'string')
          )
          && check.between(value.map(file => file.data.size), field.min_size, field.max_size)
      }
    }
  },

  form(form) {
    return check.type(form, 'object')
      && (!form.id || check.type(form.id, 'string'))
      && (!form.name || check.type(form.name, 'string'))
      && (!form.description || check.type(form.description, 'string'))
      && (!form.interactions || check.type(form.interactions, 'string'))
      && (!form.flags || check.type(form.flags, 'number'))
  },

  formBody(body) {
    //
  },

  formField(field) {
    //
  },
}