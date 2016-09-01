module.exports = function(app) {
	var api = require('../controllers/nota');

	app.route('/notas')
		.get(api.getAll)
		.post(api.addItem);

	app.route('/notas/:id')
		.get(api.getId)
		.update(api.updateItem)
		.delete(api.deleteItem);
}