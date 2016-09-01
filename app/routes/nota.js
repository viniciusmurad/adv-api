module.exports = function(app) {
	
	app.get('/notas', function(req, res) {
		res.send('notas...');
	})
	
}