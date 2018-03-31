//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var event = new Schema({
    name: String,
    description: Date,
    img: { data: Buffer, contentType: String },
    location: String,
    type: String,
    price: Number,
    date: String,
    start: Number, //in UTC
    end: Number, //in UTC
    organizerName: String,
    organizerDescription: String

});

// Compile model from schema
var Event = mongoose.model('Event', event );

module.exports = Event;
