const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  clusterlink: { type: String },
  uniflag: { type: String},
  flags: { type: String },
  status: { type: String },
  aianswer: { type: String },
  emotion: { type: String },
  industry: { type: String },
  translation: { type: String },
  summary: { type: String },
  answered: { type: String },
});

const messageModel = mongoose.model('messages',messageSchema)
module.exports = messageModel;