import Form from '../../form.js';

import TextInput from './inputs/TextInput.svelte';
import MultilineInput from './inputs/MultilineInput.svelte';
import ListInput from './inputs/ListInput.svelte';
import SelectInput from './inputs/SelectInput.svelte';
import OrderInput from './inputs/OrderInput.svelte';
import CheckboxInput from './inputs/CheckboxInput.svelte';
import FileInput from './inputs/FileInput.svelte';

export default {
  [Form.FIELD_TYPES.TEXT]: TextInput,
  [Form.FIELD_TYPES.MULTILINE]: MultilineInput,
  [Form.FIELD_TYPES.LIST]: ListInput,
  [Form.FIELD_TYPES.SELECT]: SelectInput,
  [Form.FIELD_TYPES.ORDER]: OrderInput,
  [Form.FIELD_TYPES.CHECKBOX]: CheckboxInput,
  [Form.FIELD_TYPES.FILE]: FileInput,
}