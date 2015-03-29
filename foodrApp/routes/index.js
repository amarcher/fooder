var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Foodr' });
});

router.get('/food-item', function(req, res) {
  var request = require('request');
  request('https://www.kimonolabs.com/api/a7402n1s?apikey=Rj0rcm6juczm4poVvvJrivDOVdYMjhQv', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.type('json').send(body);
    }
  })
});

module.exports = router;
