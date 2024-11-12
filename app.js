const express = require('express');

const app = express();

const PORT = 3000;


// define a route

//home route
app.get('/', (req, res) => {
	res.render('index', { title: 'Demos' });
});

//about route
app.get('/about', (req, res) => {
	res.send('About page');
});

//contact route
app.get('/contact', (req, res) => {
	res.send('Contact page');
});


//sending json data route
app.get('/api/data', (req, res) => {
	res.json({ message: 'This is JSON data', data: [1, 2, 3] });
});


app.use(express.json());

app.use((req, res, next) => {
	console.log('${req.method} request for ${req.url}');
	next(); // pass control to the next handler
});

app.set('view engine', 'ejs');

// start server

app.listen(PORT, () => {
	console.log('Server is running on http://localhost:${PORT}');
});
