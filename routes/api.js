var express = require('express');
var router = express.Router();
var mapController = require('../controllers/map');

/* GET users listing. */
router.post('/', mapController.postMaps );
router.get('/', mapController.getMaps );
router.get('/:map_id', mapController.getMap );
router.put('/:map_id', mapController.putMap );
router.delete('/:map_id', mapController.deleteMap );

module.exports = router;