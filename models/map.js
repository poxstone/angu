var mongoose = require('mongoose');

var MapSchema = new mongoose.Schema({
	name: String,
	type: String,
	
	primary: Boolean
});

module.exports = mongoose.model('Map', MapSchema);