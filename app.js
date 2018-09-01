
//////////////////////////////////////////////
// Basic set up
//////////////////////////////////////////////
//Create the entry to the setup of the framework
const express = require('express')
//Setup the framework
const app = express()
//Setup the template engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//////////////////////////////////////////////
// These are the routes
//////////////////////////////////////////////
//Basic route that gets simple text
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
//Root route that renders the String through Handlebars home file
app.get('/', (req, res) => {
    res.render('home', { msg: 'Hello World!' });
});

//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});