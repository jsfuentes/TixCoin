const
  fs = require('fs');

var Event = require('../models/event');
const PATH_TO_UPLOAD = "../uploads/";
// Display list of all BookInstances.
exports.event_list = function(req, res) {
    res.render('test');
};

// Display detail page for a specific BookInstance.
exports.event_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Event detail: ' + req.params.eventId);
};

// Handle BookInstance create on POST.
exports.event_create = function(req, res) {
  // var imgFile = fs.readFileSync(PATH_TO_UPLOAD + req.files[0].filename);

  // var newEvent = new Event({
  //   name: "LA Hacks",
  //   description: "Ok hackathon ever",
  //   location: "Here",
  //   type: "Hackathon",
  //   price: 0,
  //   count: 1000,
  //   date: "3/31/18",
  //   start: 99999998, //in UTC
  //   end: 99999999, //in UTC
  //   organizerName: "UCLA",
  //   organizerDescription: "the best school",
  //   img: {data: imgFile, contentType: req.files[0].mimetype}
  // });
  // newEvent.save();
  console.log("Files:", req.files);
  console.log("Body:", req.body);
  // newItem.save();
  res.send(req.files);
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
