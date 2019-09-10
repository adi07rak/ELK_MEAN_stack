const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const elasticsearch = require('elasticsearch');
const router = express.Router();
const bodyParser = require("body-parser");
//const router = require('router');


const client = new elasticsearch.Client({
    host: 'localhost:9200'
});

//npm install --save-dev @types/elasticsearch

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
router.use((req,res,next)=>{
    console.log(req.method,req.url);

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});
app.use(cors({
    origin : "http://localhost:4200"
}));
app.post('/addCust',(req,res)=>{
    console.log(req.body);
});

app.post('/workout',(req,res)=>{
    client.index({
        index:'workout',
        type: 'mytype',
        id: req.body.id,
        body: req.body
    },function(err,resp){
        if(err) console.log(err);
        else{
            res.status(200).send({message:"correct!"});
        }
    })
    //res.send({mes:"hello from workout"});
});
// app.use(cors({
//     origin:"http://localhost:4200"
// }));

app.listen(3000,()=>{
    console.log("running on 3000!!");
    
});