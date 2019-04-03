const express = require('express');

var app = express();

app.get('/', (req,res) => {
	res.send({
		message: "Welcome to nodejs!"
	})
});


app.listen(3000, ()=> {
	console.log("Application is running on port 3000, ok");
})
