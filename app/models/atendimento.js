var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Atendimento = new Schema({
	dt_atendimento : Date
});

module.exports = mongoose.model('Atendimento', Atendimento);

