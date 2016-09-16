module.exports = function(app) {

	var Usuario = require('../models/usuario');
	var jwt = require('jsonwebtoken');


	app.post('/logar', function(req, res) {
		Usuario
			.findOne({login: req.body.login, senha: req.body.senha})
			.then(function(usuario) {
				if(!usuario) {
					console.log('Login e senha inválidos');
					res.sendStatus(401);
				} else {
					var token = jwt.sign({login: usuario.login}, app.get('secret'), {
						expiresIn: 84600
					});
					console.log('token criado');
					res.set('x-access-token', token);
					res.json({
			          success: true,
			          message: 'Enjoy your token!',
			          usuario: usuario.login,
			          token: token
			        });
				}

			}, function(error) {
				console.log('Login e senha inválidos');
				res.sendStatus(401);
			})
	})

	app.use('/*', function(req, res, next) {
		var token = req.headers['x-access-token'];
		if (token) {
			console.log('verificando token');
			jwt.verify(token, app.get('secret'), function(err, decoded) {
				if(err) {
					console.log('token inválido');
					res.sendStatus(401);
				}
				req.usuario = decoded;
				next();
			})
		} else {
			console.log('token não enviado');
			res.sendStatus(401);
		}
		
	})

}