const { emotions } = require('./Mindsdb');
const mongoose = require('mongoose');
const messageModel = require('./Models/message');
const connectdb = require('./db/connect');

async function updatemessage(promptmsg){
    const emotiont = await emotions(promptmsg);
    await messageModel.updateOne({ message : promptmsg},{$set: { emotion : emotiont}});
}

module.exports = {updatemessage}