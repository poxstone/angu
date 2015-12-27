var express = require('express');
var router = express.Router();
/* Import apis controllers */
var mapController = require('../controllers/map');
var userController = require('../controllers/user');

/* GET maps listing. */
router.post('/maps/', mapController.postMaps );
router.get('/maps/', mapController.getMaps );
router.get('/maps/:map_id', mapController.getMap );
router.put('/maps/:map_id', mapController.putMap );
router.delete('/maps/:map_id', mapController.deleteMap );

/* GET users listing. */
router.post('/users/', userController.postUsers );
router.get('/users/', userController.getUsers );

module.exports = router;