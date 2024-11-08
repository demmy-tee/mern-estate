import  mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, ' email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, ' input your password']
  },
}, { timestamps: true });
export const User = mongoose.model('User', userSchema);
