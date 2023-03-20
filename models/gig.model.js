import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const gigSchema = Schema({
  userID:{
    type:Number,
    required:true,
  },
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  sales:{
    type:Number,
    required:true,
  },
});

export default model('Gig', gigSchema)