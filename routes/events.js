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
  Event.find({}, function (err, events) {
    if (err) return res.render('404');
    // 'athletes' contains the list of athletes that match the criteria.
    console.log("ALL EVENTS: ", events);
    res.render('listings', {events: events});
  });
  // console.log("/events");
  // res.render('listings', { events: events });
});

router.get('/id/:address', function(req, res) {
  console.log("eid: ", req.params);
  var reqAddress = req.params.address;
  console.log("Address");
  console.log(reqAddress);
  Event.findOne({address: reqAddress}, function (err, event) {
    if (err) return res.render('404');

    console.log("THE REQUESTED EVENT:", event);
    res.render('listing', {event: event});
  });
});

router.get('/checkout', function(req, res) {
  res.render('checkout.ejs');
});

router.get('/create', function(req, res) {
  res.render('create_form');
});

router.post('/create', upload.any(), eventsController.event_create);

router.get('/create2', function(req, res) {
  res.render('event_form');
});

module.exports = router;
