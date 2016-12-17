var bodyParser = require('body-parser');
var express = require('express');
var app = express();


var models = require('./models');
var Contact = models.Contact;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/node_modules'))
app.use(express.static(__dirname + '/public'))

Contact.sync()

app.listen(process.env.PORT || 5000,function(){
	console.log("Listening");
})

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/',(req,res,next)=>{

	return Contact.create({
		name:req.body.name,
		message: req.body.message,
		email: req.body.email
	})
	.then((response) => {

		res.send("Sucessfully Submited")
	})
})
