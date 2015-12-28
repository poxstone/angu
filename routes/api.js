var express = require('express');
var router = express.Router();
/* Import apis controllers */
var mapController = require('../controllers/map');
var userController = require('../controllers/user');
var clientController = require('../controllers/client');

/* GET maps listing. */
router.post('/maps/', mapController.postMaps )
	.get('/maps/', mapController.getMaps )
	.get('/maps/:map_id', mapController.getMap )
	.get('/mapsuser/:user_id', mapController.getMapuser )
	.put('/maps/:map_id', mapController.putMap )
	.delete('/maps/:map_id', mapController.deleteMap );

/* GET users listing. */
router.post('/users/', userController.postUsers )
	.get('/users/', userController.getUsers );

/* GET clients listing. */
router.post('/clients/', clientController.postClients )
	.get('/clients/:client_id', clientController.getClients );

module.exports = router;