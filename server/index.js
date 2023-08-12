const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

//  routes
const home = require('./routes/home');

//  middleware
app.use('/', home);

app.listen(5001, () => {
	console.log(`server is listening`);
});


