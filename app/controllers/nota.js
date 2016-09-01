var mongoose = require('mongoose'),
	model = mongoose.model('Nota'),
	api = {};

api.getAll = function(req, res) {
	res.send('working...');
}	