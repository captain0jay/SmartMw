//Get data from gtihub using github getuserdata link
//save it in the mongo db
//i am currently just using accesstoken for verification
const mongoose = require('mongoose');
const connectdb = require('./db/connect');
const userModel = require('./Models/user');
require('dotenv').config();
const uri = process.env.MONGO_URI;

connectdb(uri);

//uploads fetched rssfeed data to blog database
async function createUser(accesst){//,date){
    var usermodel = new userModel({accesst : accesst});//,date : date});
    usermodel.save()
    .then(() => console.log('user data inserted'))
    .catch(err => console.log(err));
}

module.exports = { createUser }