var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Audiencia = new Schema({
	dt_audiencia : Date,
	horario : String
});

module.exports = mongoose.model('Audiencia', Audiencia);