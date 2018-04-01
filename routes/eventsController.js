const
  fs = require('fs');
const
  Event = require('../models/event');
const PATH_TO_UPLOAD = "public/uploads/";

// Handle Event create on POST.
exports.event_create = function(req, res) {
  // var imgFile = fs.readFileSync(PATH_TO_UPLOAD + req.files[0].filename);
  console.log("body");
  console.log(req.body);
  console.log("files");
  console.log(req.files);

  var newEvent = new Event({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    type: req.body.category,
    price: req.body.price,
    count: req.body.count,
    date: req.body.date,
    time: req.body.time,
    organizerName: req.body.organizer,
    organizerDescription: req.body.organizerInfo,
    address: req.body.address,
    img: req.files[0].filename
  });
  newEvent.save();
  console.log("My Event:", newEvent);
  res.redirect('/events');
};

// var event = new Schema({
//     name: String,
//     description: Date,
//     img: { data: Buffer, contentType: String },
//     location: String,
//     type: String,
//     price: Number,
//     date: String,
//     start: Number, //in UTC
//     end: Number, //in UTC
//     organizerName: String,
//     organizerDescription: String
// });
