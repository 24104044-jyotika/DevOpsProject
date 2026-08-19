const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send('How was the session:');
    res.send('The session was good');
	});
app.listen(3000, () => {
	console.log('Running on port 3000');
	});

