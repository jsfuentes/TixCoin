var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

router.get('/dashboard', function(req,res,next) {
  console.log("Dashboard");
  res.render('dashboard');
});
module.exports = router;
