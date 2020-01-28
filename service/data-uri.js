var globalTunnel = require('global-tunnel-ng');
var imageDataURI = require('image-data-uri')


globalTunnel.initialize({
  host: 'proxyanbcge.nbc.com',
  port: 80
 });



module.exports = function(req, res){
	
	
	var imageLink = req.query.link

	imageDataURI.encodeFromURL(imageLink)
		.then(function(data){
			
			res.json({
						'status' : 'SUCCESS',
						'data' : data
			})
			
		},function(error){
			
			res.json({'status' : 'FAIL',
					'message' : error})
		
		})
}