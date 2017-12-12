var express = require('express');
var routes = express.Router();

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
	res.contentType('application/json');
	res.status(200);
	res.json({'Names' : names});
});

routes.post('/post', function(req, res){
	
	console.log(req.body);
	var nameToAdd = req.body.name;
	
	names.push(nameToAdd);
	res.contentType('application/json');
	res.status(200);
	res.json({'Names' : names});
});


routes.get('/get', function(req, res){
	
	res.contentType('application/json');
	res.status(200);
	res.json({'Names' : names});
});

routes.put('/put', function(req, res){

	

});

module.exports = routes;