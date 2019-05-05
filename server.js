//import express package
var express = require("express");

//import mongodb package
var mongodb = require("mongodb");


const path = require('path');
//MongoDB connection URL - mongodb://host:port/dbName
var dbHost = "mongodb://localhost:27017/fusion_demo";

//DB Object
var dbObject;

//get instance of MongoClient to establish connection
var MongoClient = mongodb.MongoClient;

//Connecting to the Mongodb instance.
//Make sure your mongodb daemon mongod is running on port 27017 on localhost
MongoClient.connect(dbHost, function(err, db) {
    if (err) throw err;
    dbObject = db;
});

function getData(responseObj) {
    //use the find() API and pass an empty query object to retrieve all records
    dbObject.collection("patient").find({}).toArray(function(err, docs) {
        if (err) throw err;
        var monthArray = [];
        var reactionTimeArray = [];
        var speedArray = [];
        var accuracyArray = [];
        var reachingDistanceArray = [];

        for (index in docs) {
            var doc = docs[index];
            //category array
            var month = doc['month'];
            //series 1 values array
            var reactionTime = doc['reactionTime'];
            //series 2 values array
            var speed = doc['speed'];
            //series 3 values array
            var accuracy = doc['accuracy'];
            //series 4 values array
            var reachingDistance = doc['distance'];
            monthArray.push({ "label": month });
            reactionTimeArray.push({ "value": reactionTime });
            speedArray.push({ "value": speed });
            accuracyArray.push({ "value": accuracy });
            reachingDistanceArray.push({ "value": reachingDistance });
        }

        var dataset = [{
            "seriesname": "Reaction Time",
            "data": reactionTimeArray
        }];
        var dataset2 = [{
            "seriesname": "Speed",
            "data": speedArray
        }];
        var dataset3 = [{
            "seriesname": "Accuracy",
            "data": accuracyArray
        }];
        var dataset4 = [{
            "seriesname": "Reaching Distance",
            "data": reachingDistanceArray
        }];


        var response = {
            "dataset": dataset,
            "dataset2": dataset2,
            "dataset3": dataset3,
            "dataset4": dataset4,
            "categories": monthArray
        };
        responseObj.json(response);
    });
}

//create express app
var app = express();

//NPM Module to integrate Handlerbars UI template engine with Express
var exphbs = require('express-handlebars');

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout
//app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
//app.set('view engine', 'handlebars');

app.set('view engine', 'html');

//Defining middleware to serve static files
//app.use('/public', express.static('public'));
app.get("/fuelPrices", function(req, res) {
    getData(res);
});
app.use(express.static(path.join(__dirname, 'public')));
// index routes
app.get('/', function(req, res) {
    getData(res);
    res.render('/public/index.html');
});
//app.get("/", function(req, res) {
//    res.render("chart");
//});

app.listen("3300", function() {
    console.log('Server up: http://localhost:3300');
});