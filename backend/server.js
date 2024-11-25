const express = require('express');
const cors = require('cors');

const app = express();
//const PORT = 5000;

port = process.env.PORT || 5000
// Middleware
app.use(cors());
app.use(express.json());


//home route
app.get('/', (req, res) => {
        res.render('index', { title: 'Demos' });
});

// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

//route to display the search page
//app.get('/search', (req, res) => {
//      res.send(





//about route
app.get('/about', (req, res) => {
        res.send('About page');
});

//contact route
app.get('/contact', (req, res) => {
        res.send('Contact page');
});





// Example API route
//app.get('/api', (req, res) => {
  //  res.json({ message: 'Ello govna this is the backend speaking' });
//});


app.use(express.json());

app.use((req, res, next) => {
        console.log('${req.method} request for ${req.url}');
        next(); // pass control to the next handler
});

app.set('view engine', 'ejs');




// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
