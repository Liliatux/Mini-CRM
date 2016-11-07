var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var crm = {
	updateJson: function(req, res){
		var post = req.body;
		var urlCrm = __dirname + '/public/crm.json';
		fs.readFile(urlCrm, 'utf8', function(err, data){
			var content = JSON.parse(data);
			content.customers.push({first_name: post.first_name, last_name: post.last_name, phone: post.phone, mail: post.mail, description: post.description});			
			var jsonStrig = JSON.stringify(content);
			fs.writeFile(urlCrm, jsonStrig, function(err){
				if(err){
					console.log(err);
				}
			});
		});
		res.json({message: 'formulaire envoyé'});
	}
	
}

app.post('/public/crm.json', crm.updateJson);

app.listen(2314);