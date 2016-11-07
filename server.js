var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

/*var crm = {

	readJson: function(req, res){
		var get = req.body;
		var urlCrm = __dirname + '/public/crm.json';
		fs.readFile(urlCrm, 'utf8', function(err, data){
			var urlIndex = __dirname + '/public/index.html';
			fs.writeFile(urlIndex, data, function(err){
				if(err){
					console.log(err);
				}
			});
		});
	}
}*/


app.listen(2314);