const mongoose = require('mongoose');
const connectdb = require('./db/connect');
const clusterModel = require('./Models/cluster');
require('dotenv').config();
const uri = process.env.MONGO_URI;

connectdb(uri);

//uploads fetched rssfeed data to blog database
async function createCluster(clustername,accesst,clusterlink,pagelink){//,date){
    var clustermodel = new clusterModel({clustername : clustername,accesst : accesst,clusterlink : clusterlink,pagelink : pagelink});//,date : date});
    clustermodel.save()
    .then(() => console.log('user data inserted'))
    .catch(err => console.log(err));
}

async function getClusters(accesst){
    try {
        const clusterdata = await clusterModel.find({ accesst: accesst });
        //console.log('blog fetched');
        return clusterdata;
    } catch (err) {
        console.log(err);
        return null; // or throw an error if you want to handle errors higher up the call stack
    }
}

module.exports = { createCluster,getClusters }