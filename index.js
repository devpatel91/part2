var bodyParser = require('body-parser');
var express = require('express');
var app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/node_modules'))

app.listen(process.env.PORT || 5000,function(){
	console.log("Listening");
})

app.get('/',function(req,res,next){
	res.send("Hello")
})