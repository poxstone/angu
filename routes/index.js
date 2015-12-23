var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header({
    //"Content-Security-Policy":"default-src 'self';script-src 'self';object-src'none';img-src 'self';media-src 'self';frame-src 'none';font-src 'self' data:;connect-src 'self';style-src 'self'",
    "etag":"W/\"7c0-j3hkc9STdYut/WOnn1oySQ"//is for cache browser 
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
