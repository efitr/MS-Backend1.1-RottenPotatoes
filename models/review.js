
//////////////////////////////////////////////
// Database MONGODB
//////////////////////////////////////////////
//Setup Object Document Manager
//Create the mongoose conection 
//For this we installed: npm install -g mongoose, something along this lines
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

var Review = mongoose.model('Review', {
    
    title: String,
    description: String,
    movieTitle: String,
    rating: String
});

module.exports = Review;
