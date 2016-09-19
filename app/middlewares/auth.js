var Usuario = require('../models/usuario'),
	jwt = require('jsonwebtoken'),
	config = require('../../config');

var isAuthenticated = function(req, res, next) {
		var token = req.headers['x-access-token'];
		if (token) {
			console.log('verificando token');
			jwt.verify(token, config.secret, function(err, decoded) {
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
	}

module.exports = isAuthenticated;