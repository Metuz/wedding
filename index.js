const express = require('express');
const sendEmail = require('./email');
const app = express();
let port = process.env.PORT;
if (port == null || port == ""){
	port = 3000;
};

app.use(express.urlencoded({ 
	extended: false 
}));
app.use(express.json());

app.post('/email', (req, res) => {
	sendEmail(req.body);
	res.json({ message: 'Message recive'});
})

app.use(express.static('public'));
app.listen(port, () => {
	console.log('Listen');
});
