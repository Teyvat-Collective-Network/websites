import mongoose from 'mongoose';

export default new mongoose.Schema({
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
  },
  title: String,
  description: String,

  permissions: {
    roles: Number,
    users: [String],
  },

  fields: [{
    type: { type: Number },
    id: String,
    name: String,
    description: String,
    placeholder: String,
    required: Boolean,

    options: [{
      name: String,
      value: mongoose.Schema.Types.Mixed,
    }],

    min_values: Number,
    max_values: Number,
    min_length: Number,
    max_length: Number,
    min_files: Number,
    max_files: Number,
    min_size: Number,
    max_size: Number,
  }],
});