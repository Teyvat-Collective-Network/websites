import mongoose from 'mongoose';

import guild from './guild.js';
import user from './user.js';

export default class Database {
  constructor(uri) {
    this.guilds = mongoose.model('Guild', guild);
    this.users = mongoose.model('User', user);
    mongoose.connect(uri);
  }
}