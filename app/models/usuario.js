var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Usuario = new Schema({
	nome : String,
	login : String,
	senha : String
});

module.exports = mongoose.model('Usuario', Usuario);