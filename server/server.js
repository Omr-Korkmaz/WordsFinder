const cors = require('cors');
const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())

const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



const router = require('./router'); 
app.use('/api/', router);

app.get('/', (req, res) => {
    const d = new Date();
    res.json({ currenttime: d.toTimeString() });
    console.log('Received GET request...');
});

app.listen(port, (err) => {
	if (err) { console.log(err); };
	console.log('Listening on port ' + port);
});
