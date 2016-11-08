var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var crm = {
	updateJson: function(req, res){
		var post = req.body; //Données du formulaire
		var urlCrm = __dirname + '/public/crm.json'; //url du fichier crm.json
		fs.readFile(urlCrm, 'utf8', function(err, data){ //lecture du fichier json
			var content = JSON.parse(data); //parse les données du json

			var lenId = content.customers[content.customers.length-1].id; //longueur du tableau selon l'id
			post.id = lenId +1; //increment l'id en fonction de la longueur du tableau

			content.customers.push({id: post.id, first_name: post.first_name, last_name: post.last_name, phone: post.phone, email: post.email, description: post.description});
			var jsonStrig = JSON.stringify(content); //met en string les données du json
			
			fs.writeFile(urlCrm, jsonStrig, function(err){ //écrit dans le json les données poussées en string
				if(err){
					console.log(err);
				}
			});
		});
		res.json({message: 'formulaire envoyé'});
	}
	
}

app.post('/public', crm.updateJson);

app.listen(2314);