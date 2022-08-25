import mongoose from 'mongoose';

export default new mongoose.Schema({
  id: String,
  owner: String,
  name: String,
  description: String,
  interactions: String,
  flags: Number,
});