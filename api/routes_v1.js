var express = require('express');
var routes = express.Router();
const fs = require('fs');

var names = ["Astral", "Scarlett", "Skarin"];

var mijnObject = {
	mijntekst: 'Hello world'
};

routes.delete('/delete', function(req, res){
	console.log(req.body);
	var index = names.indexOf(req.body.name);
	if(index > -1){
		names.splice(index, 1);	
	}
	res.status(200);
	res.json({'Names' : names});
});

routes.post('/post', function(req, res){
	
	console.log(req.body);
	var nameToAdd = req.body.naam;
	
	names.push(nameToAdd);
	res.status(200);
	res.json({'Names' : names});
});


routes.get('/get', function(req, res){
	res.status(200);
	res.json({'Names' : names});
});

routes.get('/download', function(req, res){
		res.download('stock.jpg');
		res.status(200);
});

routes.post('/download', function(req, res){
	
	var fileName = req.body.file;
	var legitFile = false;
	
	console.log(fileName);
	
	try {
		fs.open(fileName, 'a', function(foo, bar){});
		legitFile = true;
	} catch (error) {
		console.log(error);
	}; 
	
	// Files available: stock.jpg
	if(legitFile){
		res.download(fileName);
		res.status(200);
	}
	else {
		res.status(404)
		.json({'Error 404: ' : 'No such file'});
	}
});

routes.put('/put', function(req, res){
	
	

});


routes.get('/*', function(req, res){
	res.status(404)
		.json({'Error' : 'Bad Request. Try   http://localhost:3000/api/v1/get'})
			.end();
});

module.exports = routes;