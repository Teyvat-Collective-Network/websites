import Form from '../../form.js';

import TextField from './fields/TextField.svelte';
import MultilineField from './fields/MultilineField.svelte';
import OrderField from './fields/OrderField.svelte';
import ListField from './fields/ListField.svelte';
import SelectField from './fields/SelectField.svelte';
import CheckboxField from './fields/CheckboxField.svelte';
import FileField from './fields/FileField.svelte';

export default {
  [Form.FIELD_TYPES.TEXT]: TextField,
  [Form.FIELD_TYPES.MULTILINE]: MultilineField,
  [Form.FIELD_TYPES.LIST]: ListField,
  [Form.FIELD_TYPES.SELECT]: SelectField,
  [Form.FIELD_TYPES.ORDER]: OrderField,
  [Form.FIELD_TYPES.CHECKBOX]: CheckboxField,
  [Form.FIELD_TYPES.FILE]: FileField,
}