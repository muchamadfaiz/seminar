import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = Schema({
  username: {
    type: String,
    minlength: [3, 'min username 3 character'],
    maxlength: [20, 'min username 3 character'],
    required: [true, "username harus diisi"],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    // minlength: [6, 'Minimum password length must be 6 characters'],
  },
},
  { timestamps: true }
);

const UserModel= model('User', userSchema)
export {UserModel}