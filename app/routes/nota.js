module.exports = function(app) {
	
	var Nota = require('../models/nota');
	
	app.get('/notas', function(req, res) {
		Nota.find({})
			.then(function(notas) {
				res.json(notas);
			}, function(err) {
				console.log(err);
			})
	})

	
	
}