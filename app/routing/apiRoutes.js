var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var friendsList = require('../data/friends.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends", function (req, res) {
        //here is where the logic will go
        //for the incoming data from the user (name, photo-url, and scores)
    });
};