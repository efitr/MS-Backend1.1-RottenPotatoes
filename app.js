
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
//This will be importing the neccesary controllers
const reviews = require('./controllers/reviews')(app)
const comments = require('./controllers/comments')(app)


// reviews(app);
// comments(app);



//////////////////////////////////////////////
// This will connect with the web
//////////////////////////////////////////////
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});