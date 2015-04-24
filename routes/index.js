var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Send a POST request to proxy' });
});

// at url / with POST
router.post('/', function(req, res, next) {
  request.post('http://www.google-analytics.com', { // make req to GA
    form: req.body // send same params as client
  }).pipe( res ); // and proxy back to client result
});

module.exports = router;
