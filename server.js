//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
mongoose.connect('mongodb://spain-events-places-activities:VjlikOlAdZtY39Je@cluster0-shard-00-00-zxksb.mongodb.net:27017,cluster0-shard-00-01-zxksb.mongodb.net:27017,cluster0-shard-00-02-zxksb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
app.use('/', router);
module.exports=app;


