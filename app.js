
//////////////////////////////////////////////
// Basic set up
//////////////////////////////////////////////
//Create the entry to the setup of the framework
const express = require('express');
//Setup the framework
const app = express();
//Setup the template engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let reviews = [
    { title: "Great Review" },
    { title: "Next Review" } 
];

//////////////////////////////////////////////
// These are the routes
//////////////////////////////////////////////
//Reviews route, here you are requesting from the backend and responding to it
//the response renders through handlebars all the reviews
app.get('/', (req, res) => {
    res.render('reviews-index', { reviews: reviews });
}); //Javascript commetaries: you can nest calls to call other things that do 
    //another step of the process

//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});