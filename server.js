const express = require('express');
const app = express();
var cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default:fetch})=> fetch(...args));
var bodyParser = require('body-parser');
const { createUser } = require('./Users/Getuser');
const { createCluster,getClusters } = require('./Users/Clusters')
require('dotenv').config()
const CLIENT_ID=process.env.CLIENT_ID;
const CLIENT_SECRET=process.env.CLIENT_SECRET;
const REDIRECT_URL = "http://localhost:3000/"
const tokan = typeof window !== 'undefined' ? localStorage.getItem('access_tokenn') : null
const clusterModel = require('./Users/Models/cluster');
const connectdb = require('./Users/db/connect');
const { updatemessage } = require('./Users/Mdbupdater');
const messageModel = require('./Users/Models/message');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
//app.use(Upload())

app.get('/accessToken', async function (req,res){
    console.log(req.query.code);
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;// + "&redirect_uri=" + REDIRECT_URL;
    await fetch("https://github.com/login/oauth/access_token" + params,{
        method: "POST",
        headers: {
            "Accept" : "application/json"
        }
    }).then((response)=>{
        console.log(response);
        return response.json();
    }).then((data)=>{
        console.log(data);
        createUser(data.access_token);
        res.json(data);
    });
});


app.post('/ccluster',async function(req,res){
    console.log("running...");
    console.log(req.body.cluster);
    console.log(req.body.value);
    let pagelink = "/"+req.body.cluster;
    createCluster(req.body.cluster,req.body.value,req.body.clusterlink,pagelink);
    res.redirect('/');
})

app.get('/getclusters',async function(req,res){
    try {
        const response = await clusterModel.find({ accesst: req.query.token });
        console.log(response);
        res.json(response);
} catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
})

app.get('/refmsg',async function(req,res){
    console.log(req.query.plink);
    const response = await clusterModel.find({ pagelink : req.query.plink });
    console.log(response);
    let monglink = response[0].clusterlink;
    console.log("server..:");
    console.log(monglink);
    connectdb(monglink);
    const mongdata = await messageModel.find({ clusterlink : req.query.plink});

    //so i tried directly using monddata[0] but it doesnt work so i used this
    const mongdataJSON = JSON.stringify(mongdata[0]);
    const mongdataObj = JSON.parse(mongdataJSON);
    const nmessage = mongdataObj.message;
    console.log(nmessage);

    await updatemessage(nmessage);

    const newmongdata = await messageModel.find({ clusterlink : req.query.plink});
    res.json(newmongdata)
    //always add res.json() instead of return in function(req,res)
})

app.listen(4000,function(){
    console.log("listening to port...")
})
