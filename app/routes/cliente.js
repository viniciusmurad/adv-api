module.exports = function(app) {
	
	var Usuario = require('../models/usuario');
	var Cliente = require('../models/cliente');

	/* GET all clientes */
	app.get('/clientes', function(req, res) {
		Cliente.find({}).exec(function(err, clientes) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(clientes);
			console.log(clientes);
		})
	})

	/* GET byId clientes */
	app.get('/clientes/:id', function(req, res) {
		Cliente.findById(req.params.id).exec(function(err, cliente) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(cliente);
			console.log(cliente);
		})
	})

	/* ADD cliente */
	app.post('/clientes/:id', function(req, res) {
		Cliente = new Cliente(req.body);
		Cliente.cliente_id = req.params.id;
		
		Cliente.save(function(err, clientes) {
			if (err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(clientes);
			console.log(clientes);
		})
	})
}