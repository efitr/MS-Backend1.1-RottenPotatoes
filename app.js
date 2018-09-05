
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
//Initialize the body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//////////////////////////////////////////////
// This will connect with the Database MONGODB
//////////////////////////////////////////////
//Setsup the Object Document Manager
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });
const Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String
});

//Hardcoded resources
// let reviews = [
//     { title: "Great Review" },
//     { title: "Next Review" }
// ];
  
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
            console.log(err.message)
        })
});
//New Reviews route
app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
});
//
app.post('/reviews', (req, res) => {
    Review.create(req.body).then((review) => {
        console.log(review);
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    })
});

//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

