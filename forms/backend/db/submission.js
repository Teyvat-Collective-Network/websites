import mongoose from 'mongoose';

export default new mongoose.Schema({
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
  },
  submitter: String,
  values: mongoose.Schema.Types.Mixed,
});