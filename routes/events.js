const
  express = require('express'),
  multer = require('multer'),
  eventsController = require('./eventsController');

var router = express.Router();
var upload = multer({ dest: 'public/uploads/'});

/* GET users listing. */
router.get('/', eventsController.event_list);

router.get('/:eventId', eventsController.event_detail);

router.post('/create', upload.any(), eventsController.event_create);

module.exports = router;
