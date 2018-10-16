
//Create the entry to the setup of the framework
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// app.use(bodyParser.json()); //quite likely unnecesary
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'));


//////////////////////////////////////////////
// Resources for networking in .controller/reviews.js
//////////////////////////////////////////////

module.exports = app;


//////////////////////////////////////////////
// Basic set up
//////////////////////////////////////////////
//This get the controllers after they have been imported from our controllers
//Its getting them from an specific part in
const reviews = require('./controllers/reviews')(app)
const comments = require('./controllers/comments')(app)

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});


//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
// app.listen(3000, () => {
//   console.log('App listening on port 3000!');
// });

let port = process.env.PORT || 3000;
app.listen(port);