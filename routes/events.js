const
  express = require('express');
  eventsController = require('./eventsController')

var router = express.Router();

/* GET users listing. */
router.get('/', eventsController.event_list);

router.get('/:eventId', eventsController.event_detail);

router.post('/create', eventsController.event_create);

module.exports = router;
