var express = require('express')
var routes = require('./api/routes')

var app = express();

var port = 3000

routes(app)

app.listen(port, function(){
	
	console.log('Server started on port: ', port)
})
