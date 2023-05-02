const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  //username: { type: String,
          //required: true },
  accesst: { type: String, 
           required: true},
});

const userModel = mongoose.model('User',userSchema)
module.exports = userModel;
//chatgpt:- const User = mongoose.model('User', userSchema);