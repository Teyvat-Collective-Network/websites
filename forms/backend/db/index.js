import mongoose from 'mongoose';

import form from './form.js';
import formBody from './formBody.js';
import submission from './submission.js';

export default class Database {
  constructor(uri) {
    this.forms = mongoose.model('Form', form);
    this.interactions = {
      forms: mongoose.model('FormBody', formBody),
      submissions: mongoose.model('Submission', submission),
    };
    mongoose.connect(uri);
  }
}