var controller = require('./controller')


module.exports = function(app){
	
	app.route('/getDataURI').get(controller.getDataURI)
	
}