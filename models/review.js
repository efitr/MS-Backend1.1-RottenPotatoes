
//////////////////////////////////////////////
// Database MONGODB
//////////////////////////////////////////////
//Setup Object Document Manager
//Create the mongoose conection 
const mongoose = require('mongoose');
//Maybe I should handle this better
// Quite likely won't is actually necesary 
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

var Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String,
    rating: String
});

module.exports = Review;
