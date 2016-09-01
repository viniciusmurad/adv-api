var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Cliente = new Schema({
	nome : String,
	celular : Number,
	email : String,
	dt_nascimento : String
});

module.exports = mongoose.model('Cliente', Cliente);