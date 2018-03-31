const
  fs = require('fs');
const
  Event = require('../models/event');
const PATH_TO_UPLOAD = "public/uploads/";

// Handle Event create on POST.
exports.event_create = function(req, res) {
  console.log("Current dir", process.cwd());
  var imgFile = fs.readFileSync(PATH_TO_UPLOAD + req.files[0].filename);

  var newEvent = new Event({
    name: "LA Hacks",
    description: "Ok hackathon ever",
    location: "Here",
    type: "Hackathon",
    price: 0,
    count: 1000,
    date: "3/31/18",
    start: 99999998, //in UTC
    end: 99999999, //in UTC
    organizerName: "UCLA",
    organizerDescription: "the best school",
    img: {data: imgFile, contentType: req.files[0].mimetype}
  });
  newEvent.save();
  console.log("My Event:", newEvent);
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
