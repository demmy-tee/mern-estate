const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    username: String,
    required: true,
    unique: true,
  },
  email: {
    username: String,
    required: true,
    unique: true,
  },
  password: {
    username: String,
    required: true,
  },
}, { timestamps: true });
export const User = mongoose.model('User', userSchema);