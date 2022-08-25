import mongoose from 'mongoose';

export default new mongoose.Schema({
  id: String,
  name: String,
  character: String,
  invite: String,
  owner: String,
  advisor: String,
  voter: String,
});