import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username harus diisi"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    minlength: [6, 'Minimum password length must be 6 characters'],
  },
},
  { timestamps: true }
);

const UserModel= model('User', userSchema)
export {UserModel}