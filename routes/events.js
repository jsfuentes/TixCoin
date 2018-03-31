const
  express = require('express'),
  multer = require('multer');

const
  Event = require('../models/event'),
  eventsController = require('./eventsController');

var router = express.Router();
var upload = multer({ dest: 'public/uploads/'});

/* GET users listing. */
router.get('/', function(req, res) {
  // Event.find({}, function (err, events) {
  //   if (err) return res.send(err);
  //   // 'athletes' contains the list of athletes that match the criteria.
  //   console.log("ALL EVENTS: ", events);
  //   res.render('listing', {events: events});
  // });
  console.log("/events");
  res.render('listings');
});

router.get('/id/:eventId', function(req, res) {
  console.log("/events/id");
  console.log("eid: ", )
  res.render('listing');
});

router.get('/create', function(req, res) {
  res.render('create_form')
});

router.post('/create', upload.any(), eventsController.event_create);

module.exports = router;
