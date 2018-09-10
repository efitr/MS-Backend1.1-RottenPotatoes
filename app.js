
//////////////////////////////////////////////
// Basic set up
//////////////////////////////////////////////
//Create the entry to the setup of the framework
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var http = require('http');
const reviews = require('./reviews');


app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

//////////////////////////////////////////////
// Resources for networking in .controller/reviews.js
//////////////////////////////////////////////



//////////////////////////////////////////////
// Database MONGODB
//////////////////////////////////////////////
//Setup Object Document Manager
//Create the mongoose conection 
const mongoose = require('mongoose');
//Maybe I should handle this better
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', { 
  useNewUrlParser: true 
})
  .then(() => {
    console.log("MongoDB is functioning");
  })
  .catch( err => {
    throw err;
  })

const Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String
});

//////////////////////////////////////////////
// ROUTES
//////////////////////////////////////////////
//GET root -> Moved to reviews
// app.get( '/', (req , res) => {
//   Review.find()
//     .then(reviews => {
//       res.render('reviews-index', { reviews: reviews })
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });
//GET review
// app.get('/reviews/new', (req, res) => {
//   res.render('reviews-new', {});
// });
//POST review
// app.post('/reviews', (req, res) => {
//   Review.create(req.body)
//   .then((review) => {
//     console.log(review);
//     res.redirect(`/reviews/${review._id}`); // Redirect to reviews/:id
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// });
//GET specific rev
// app.get('/reviews/:id', (req, res) => {
//   Review.findById(req.params.id)
//   .then((review) => {
//     res.render('reviews-show', { review: review })
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// });
//GET edit review
// app.get('/reviews/:id/edit', function (req, res) {
//   Review.findById(req.params.id, function(err, review) {
//     res.render('reviews-edit', {review: review});
//   });
// });
//PUT
// app.put('/reviews/:id', (req, res) => {
//   Review.findByIdAndUpdate(req.params.id, req.body)
//     .then(review => {
//       res.redirect(`/reviews/${review._id}`);
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });
// DELETE
// app.delete('/reviews/:id', function (req, res) {
//   console.log("DELETE review")
//   Review.findByIdAndRemove(req.params.id)
//   .then((review) => {
//     res.redirect('/');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// });

//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

