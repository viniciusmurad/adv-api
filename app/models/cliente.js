var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var notaSchema = new Schema({
	dt_nota : Date,
	texto : String,
	clienteId : {
			type: Schema.Types.ObjectId,
			ref: 'Cliente'
	}
})
module.exports = mongoose.model('Nota', notaSchema);

var audienciaSchema = new Schema({
	dt_audiencia : Date,
	horario : String,
	clienteId : {
			type: Schema.Types.ObjectId,
			ref: 'Cliente'
	}
})
module.exports = mongoose.model('Audiencia', audienciaSchema);

var atendimentoSchema = new Schema({
	dt_atendimento : Date,
	clienteId : {
			type: Schema.Types.ObjectId,
			ref: 'Cliente'
	}
})
module.exports = mongoose.model('Atendimento', atendimentoSchema);

var Cliente = new Schema({
	nome : String,
	celular : Number,
	email : String,
	dt_nascimento : String,
	usuario : {
			type: Schema.Types.ObjectId,
			ref: 'Usuario'
		},
	nota: [notaSchema],
	audiencia: [audienciaSchema],
	atendimento: [atendimentoSchema]
});
module.exports = mongoose.model('Cliente', Cliente);


