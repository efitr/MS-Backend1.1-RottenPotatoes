
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

//////////////////////////////////////////////
// This will connect with the Database MONGODB
//////////////////////////////////////////////
//Setsup the Object Document Manager
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });
const Review = mongoose.model('Review', {
    title: String
});

//Hardcoded resources
let reviews = [
    { title: "Great Review" },
    { title: "Next Review" }
]
  
//////////////////////////////////////////////
// These are the routes
//////////////////////////////////////////////
//Reviews route, here you are requesting from the backend and responding to it
//the response renders through handlebars all the reviews
app.get( '/', (req , res) => {
    Review.find() //Return a premise, it is a value that will provided 
        .then(reviews => {
            res.render('reviews-index', { reviews: reviews})
        })
        .catch(err => {
            console.error(err)
        });
});
//New Reviews route
app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
});

//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

