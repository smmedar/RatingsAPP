var dataUri = require('../service/data-uri')

var controller = {
	
	getDataURI : function(req, resp){
		
		dataUri(req, resp)
	}
	
}

module.exports = controller