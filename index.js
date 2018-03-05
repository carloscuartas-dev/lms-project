/* 
 * Project LMS WebApp with MEAN
 * Author: Carlos Cuartas
 * Date: 03/2018
 * Version: 1.0.0
 */
'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977; // Backend port server

mongoose.Promise = global.Promise;
var uri = 'mongodb://lms-project:tV2@7m7da#YpeZKv@cluster0-shard-00-00-vj9iw.mongodb.net:27017,cluster0-shard-00-01-vj9iw.mongodb.net:27017,cluster0-shard-00-02-vj9iw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
// DataBase Connection 
mongoose.connect(uri, (err,res) => {
    if (err) {
        throw err;
    } else {
        console.log("Database connection is OK");
        app.listen(port, function () {
            console.log("API Rest LMS Server, listening by port: " +  port);
        });
    }
});

