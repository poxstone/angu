var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log('req.params.user_id: ',req.params.user_id);
  res.header({
    //"Content-Security-Policy":"default-src 'self';script-src 'self';object-src'none';img-src 'self';media-src 'self';frame-src 'none';font-src 'self' data:;connect-src 'self';style-src 'self'",
    "etag":"W/\"7c0-j3hkc9STdYut/WOnn1oySQ"//is for cache browser 
  });
  res.render('index', { title: 'Express' });
});

router.get('/dialog/', authController.isAuthenticated, function(req, res, next) {
	console.log('Clieeeente: ', req.client );
  res.render('dialog', { title: 'dialog', user: req.user, client: req.client });
});

module.exports = router;
