
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'));

// //////////////////////////////////////////////
// // Database MONGODB
// //////////////////////////////////////////////
// //Setup Object Document Manager
// //Create the mongoose conection 
// var mongoose = require('mongoose');
// //Maybe I should handle this better
// ////////////
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

// mongoose.connect(
//   .then(() => {
//     console.log("MongoDB is functioning");
//   })
//   .catch( err => {
//     throw err;
//   })

// var reviewSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     movieTitle: String
// });

// var Review = mongoose.model("Review", reviewSchema);

//////////////////////////////////////////////
// Resources for networking in .controller/reviews.js
//////////////////////////////////////////////

//I'm supposed to get the routes from reviews.js
const reviewRoute = require("./controllers/reviews.js")(app)

//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

