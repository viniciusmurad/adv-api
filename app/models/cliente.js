var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Cliente = new Schema({
	nome : String,
	celular : Number,
	email : String,
	dt_nascimento : String,
	usuario: {
			type: Schema.Types.ObjectId,
			ref: 'Usuario'
		},
	nota : [{
		dt_nota : Date,
		texto : String,
		_id : Schema.Types.ObjectId
	}],
	audiencia : [{
		dt_audiencia : Date,
		horario : String,
		_id : Schema.Types.ObjectId
	}],
	atendimento: [{
		dt_atendimento : Date,
		_id : Schema.Types.ObjectId
	}]
});

module.exports = mongoose.model('Cliente', Cliente);