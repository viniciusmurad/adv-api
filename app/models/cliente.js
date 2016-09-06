var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Cliente = new Schema({
	nome : String,
	celular : Number,
	email : String,
	dt_nascimento : String,
	cliente : {
			type: Schema.Types.ObjectId,
			ref: Usuario
		},
	nota : [{
		dt_nota : Date,
		texto : String
	}],
	audiencia : [{
		dt_audiencia : Date,
		horario : String
	}],
	atendimento: [{
		dt_atendimento : Date
	}]
});

module.exports = mongoose.model('Cliente', Cliente);