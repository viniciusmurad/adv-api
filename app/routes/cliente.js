module.exports = function(app) {
	
	app.get('/clientes', function(req, res) {
		res.send('clientes...');
	});
	
}