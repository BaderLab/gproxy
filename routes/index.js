var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Send a POST request to proxy' });
});

// at url / with POST
router.post('/', function(req, res, next) {
  res.append('Access-Control-Allow-Origin', '*'); // allow anyone to make cross-origin requests

  request.post('http://www.google-analytics.com/collect', { // make req to GA
    form: req.body // send same params as client
  }).pipe( res ); // and proxy back to client result
});

module.exports = router;
