/**
 * Main du server
 */

var express = require('express');
var bodyParser = require('body-parser');
var remote = require('./src/remote')();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/node_modules/angular", express.static('node_modules/angular'));
app.use("/node_modules/angular-messages", express.static('node_modules/angular-messages'));
app.use("/node_modules/angular-material", express.static('node_modules/angular-material'));
app.use("/node_modules/angular-aria", express.static('node_modules/angular-aria'));
app.use("/node_modules/angular-animate", express.static('node_modules/angular-animate'));
app.use("/node_modules/angular-route", express.static('node_modules/angular-route'));
app.use("/node_modules/material-design-icons/iconfont", express.static('node_modules/material-design-icons/iconfont'));


/**
 * Retourne un BadRequest
 */
function badRequest(res, err) {
	  if(err)
		  console.error(err);
	  res.status(400).send('badRequest');
}

/**
 * Retourne une error
 */
function error(res, err) {
	  if(err)
		  console.error(err);
	  res.status(500).send('error');
}

/**
 * Retourne un success
 */
function success(res) {
	  res.status(200).send('success');
}

app.use(express.static('public'));
app.get("/remote", function (req, res) {		  
		  if(! req.query.key) {
			  badRequest(res);
			  return;
		  }
		  
		  remote
		  	.execute(req.query.key)
		  	.then(
		  		function() {
		  			success(res);
		  		}, 
		  		function() {
		  			error(res);
		  		}
		  	);
});

app.listen(3000, function () {
  console.log('Le serveur écoute le port 3000')
});
