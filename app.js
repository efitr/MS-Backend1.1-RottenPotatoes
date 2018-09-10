
//////////////////////////////////////////////
// Basic set up
//////////////////////////////////////////////
//Create the entry to the setup of the framework
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
var http = require('http');

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//////////////////////////////////////////////
// Database MONGODB
//////////////////////////////////////////////
//Setup Object Document Manager
//Create the mongoose conection 
const mongoose = require('mongoose');
//Maybe I should handle this better
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
// ROUTES
//////////////////////////////////////////////
//GET root
app.get( '/', (req , res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews })
    })
    .catch(err => {
      console.log(err.message);
    });
});
//GET review
app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
});
//POST review
app.post('/reviews', (req, res) => {
  Review.create(req.body)
    .then((review) => {
      console.log(review);
      res.redirect('/');
    })
    .catch(err => {
      console.log(err.message);
    });
});
//GET specific rev
app.get('/reviews/:id', (req, res) => {
  Review.findById(req.params.id)
  .then((review) => {
    res.render('reviews-show', { review: review })
  })
  .catch((err) => {
    console.log(err.message);
  })
});

//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

