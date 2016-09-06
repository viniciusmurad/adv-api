module.exports = function(app) {
	
	var Usuario = require('../models/usuario');

	app.get('/usuarios', function(req, res) {
		Usuario.find({}).exec(function(err, usuarios) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(usuarios);
			console.log(usuarios);
		})
	})

	app.get('/usuarios/:id', function(req, res) {
		Usuario.findById(req.params.id).exec(function(err, usuario) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(usuario);
			console.log(usuario);
		})
	})

	app.post('/usuarios', function(req, res) {
		var novoUsuario = new Usuario(req.body);
		novoUsuario.save(function(err, usuarios) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(usuarios);
			console.log(usuarios);
		})
	})




}