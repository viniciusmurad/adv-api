var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Nota = new Schema({
	dt_nota : Date,
	texto : String
});

module.exports = mongoose.model('Nota', Nota);