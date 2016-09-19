module.exports = function(app) {
	
	var Usuario = require('../models/usuario');
	var Cliente = require('../models/cliente');
	var isAuthenticated = require('../middlewares/auth');

	/* FEATURES CLIENTE */
	/* GET all clientes com seu respectivo usuário */
	app.get('/clientes', isAuthenticated, function(req, res) {
		Cliente.find({}).exec(function(err, clientes){
			Usuario.populate(clientes, {path: "usuario"}, function(err, clientes) {
				if (err) {
					res.status(500).json(err);
					console.log(err);
				}
				res.json(clientes);
				console.log('get todos clientes');
			})
		})
	})

	/* GET cliente de um determinado usuário */
	app.get('/clientes/:id', isAuthenticated, function(req, res) {
		Cliente.findById(req.params.id).exec(function(err, clientes){
			Usuario.populate(clientes, {path: "usuario"}, function(err, clientes) {
				if (err) {
					res.status(500).json(err);
					console.log(err);
				}
				res.json(clientes);
				console.log('get um cliente');
			})
		})
	})

	/* ADD cliente de um determinado usuário */
	app.post('/clientes', isAuthenticated, function(req, res) {
		Cliente = new Cliente(req.body);
		Cliente.usuario._id = req.body.usuario._id;
		
		Cliente.save(function(err, clientes) {
			if (err) {
				res.status(500).json(err);
				console.log(err);
			}
			res.json(clientes);
			console.log('get todos os clientes');
		})
	})

	/* UPDATE cliente */
	app.put('/clientes/:id', isAuthenticated, function(req, res) {
		Cliente.findByIdAndUpdate(req.params.id, req.body, function(err, cliente) {
			if (err) {
				res.status(500).json(err);
				console.log(err);
			} 
			res.json(cliente);
			console.log('cliente atualizado');
		})
	})

	/* DELETE cliente */
	app.delete('/clientes/:id', isAuthenticated, function(req, res) {
		Cliente.findOneAndRemove({_id: req.params.id}, function(err, cliente) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			} 
			res.json(cliente);
			console.log('cliente removido');
		})
	})
	/* END FEATURES CLIENTE */


	/* FEATURES NOTA */
	/* ADD nota */
	app.post('/clientes/notas', isAuthenticated, function(req, res) {
		Cliente.findById(req.body.clienteId, function(err, cliente) {
			if(!err) {
				cliente.nota.push({
					dt_nota: req.body.dt_nota,
					texto: req.body.texto,
					clienteId: req.body.clienteId
				})
				cliente.save(function(err, nota) {
					if (err) {
						res.status(500).json(err);
						console.log(err);
					}
					res.json(nota);
					console.log('nota adicionada');
				})
			}
		})
	})

	/* GET uma nota por id */
	app.get('/clientes/:id/notas/:notaID', isAuthenticated, function(req, res) {
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			var notaById = cliente.nota.id(req.params.notaID);
			res.json(notaById);
			console.log('get uma nota');
		})
	})

	/* DELETE uma nota por id */
	app.delete('/clientes/:id/notas/:notaID', isAuthenticated, function(req, res){
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				console.log(err);
			}
			var notaById = cliente.nota.id(req.params.notaID).remove();
			cliente.save(function(err, notaById) {
				if(err) {
					res.status(500).json(err);
					console.log(err);
				}
				res.json(notaById);
				console.log('nota removida'); 
			})
		})
	})

	/* UPDATE uma nota por id */
	app.put('/clientes/:id/notas/:notaID', isAuthenticated, function(req, res) {
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				console.log(err);
			}
			
			var notaById = cliente.nota.id(req.params.notaID);
				notaById.dt_nota = req.body.dt_nota;
				notaById.texto = req.body.texto;
				
			cliente.save(function(err, notaById) {
				if (err) {
					res.status(500).json(err);
					console.log(err);
				}
				res.json(notaById);
				console.log('nota atualizada');
			})
		})
	})
	/* END FEATURES NOTA */

	/* FEATURES AUDIÊNCIA */
	/* ADD audiência */
	app.post('/clientes/audiencias', isAuthenticated, function(req, res) {
		Cliente.findById(req.body.clienteId, function(err, cliente) {
			if(!err) {
				cliente.audiencia.push({
					dt_audiencia: req.body.dt_audiencia,
					horario: req.body.horario,
					clienteId: req.body.clienteId
				})

				cliente.save(function(err, audiencia) {
					if (err) {
						res.status(500).json(err);
						console.log(err);
					}
					res.json(audiencia);
					console.log('audiencia adicionada');
				})
			}
		})
	})

	/* GET uma audiência por id */
	app.get('/clientes/:id/audiencias/:audienciaID', isAuthenticated, function(req, res) {
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			var audienciaById = cliente.audiencia.id(req.params.audienciaID);
			res.json(audienciaById);
			console.log('get uma audiência');
		})
	})

	/* DELETE uma audiência por id */
	app.delete('/clientes/:id/audiencias/:audienciaID', isAuthenticated, function(req, res){
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				console.log(err);
			}
			var audienciaById = cliente.audiencia.id(req.params.audienciaID).remove();
			cliente.save(function(err, audienciaById) {
				if(err) {
					res.status(500).json(err);
					console.log(err);
				}
				res.json(audienciaById);
				console.log('audiência removida'); 
			})
		})
	})

	/* UPDATE uma audiência por id */
	app.put('/clientes/:id/audiencias/:audienciaID', isAuthenticated, function(req, res) {
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				console.log(err);
			}
			
			var audienciaById = cliente.audiencia.id(req.params.audienciaID);
				audienciaById.dt_audiencia = req.body.dt_audiencia;
				audienciaById.horario = req.body.horario;


			cliente.save(function(err, audienciaById) {
				if (err) {
					res.status(500).json(err);
					console.log(err);
				}
				res.json(audienciaById);
				console.log('audiência atualizada');
			})
		})
	})
	/* END FEATURES AUDIÊNCIA */

	/* FEATURES ATENDIMENTO */
	/* ADD atendimento */
	app.post('/clientes/atendimentos', isAuthenticated, function(req, res) {
		Cliente.findById(req.body.clienteId, function(err, cliente) {
			if(!err) {
				cliente.atendimento.push({
					dt_atendimento: req.body.dt_atendimento,
					clienteId: req.body.clienteId
				})

				cliente.save(function(err, atendimento) {
					if (err) {
						res.status(500).json(err);
						console.log(err);
					}
					res.json(atendimento);
					console.log('atendimento adicionada');
				})
			}
		})
	})

	/* GET uma atendimento por id */
	app.get('/clientes/:id/atendimentos/:atendimentoID', isAuthenticated, function(req, res) {
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				res.status(500).json(err);
				console.log(err);
			}
			var atendimentoById = cliente.atendimento.id(req.params.atendimentoID);
			res.json(atendimentoById);
			console.log('get um atendimento');
		})
	})

	/* DELETE um atendimento por id */
	app.delete('/clientes/:id/atendimentos/:atendimentoID', isAuthenticated, function(req, res){
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				console.log(err);
			}
			var atendimentoById = cliente.atendimento.id(req.params.atendimentoID).remove();
			cliente.save(function(err, atendimentoById) {
				if(err) {
					res.status(500).json(err);
					console.log(err);
				}
				res.json(atendimentoById);
				console.log('atendimento removida'); 
			})
		})
	})

	/* UPDATE uma audiência por id */
	app.put('/clientes/:id/atendimentos/:atendimentoID', isAuthenticated, function(req, res) {
		Cliente.findById(req.params.id, function(err, cliente) {
			if(err) {
				console.log(err);
			}
			
			var atendimentoById = cliente.atendimento.id(req.params.atendimentoID);
				atendimentoById.dt_atendimento = req.body.dt_atendimento;
				

			cliente.save(function(err, atendimentoById) {
				if (err) {
					res.status(500).json(err);
					console.log(err);
				}
				res.json(atendimentoById);
				console.log('atendimento atualizada');
			})
		})
	})
	/* END FEATURES ATENDIMENTO */




}