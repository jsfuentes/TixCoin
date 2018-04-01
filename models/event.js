//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var event = new Schema({
    name: String,
    description: String,
    img: String, //will be stored in file system 
    location: String,
    type: String,
    price: Number,
    count: Number,
    date: String,
    start: Number, //in UTC
    end: Number, //in UTC
    organizerName: String,
    organizerDescription: String,
    address: String
});

// Compile model from schema
var Event = mongoose.model('Event', event );

module.exports = Event;
