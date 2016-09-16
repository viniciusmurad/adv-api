module.exports = function(app) {
	
	var Usuario = require('../models/usuario');

	/* GET all usuarios */
	app.get('/usuarios', function(req, res) {
		Usuario.find({}).exec(function(err, usuarios) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(usuarios);
			console.log('get usuários');
		})
	})

	/* GET byId usuario */
	app.get('/usuarios/:id', function(req, res) {
		Usuario.findById(req.params.id).exec(function(err, usuario) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(usuario);
			console.log('get um usuário');
		})
	})

	/* ADD usuario */
	app.post('/usuarios', function(req, res) {
		var novoUsuario = new Usuario(req.body);
		novoUsuario.save(function(err, usuarios) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(usuarios);
			console.log('usuário adicionado');
		})
	})

	app.delete('/usuarios/:id', function(req, res) {
		Usuario.findOneAndRemove(req.params.id).exec(function(err, usuario) {
			if (err) {
				res.status(500).json(err);
				console.log(err);
			} 
			res.json(usuario);
			console.log('usuário atualizado');
		})
	})
}