
//////////////////////////////////////////////
// Resources for networking in ./models/models
//////////////////////////////////////////////

const Review = require('../models/review');
const Comment = require('../models/comment');

function reviews(app) {
//GET root
  app.get('/', (req, res) => {
    Review.find()
      .then(reviews => {
        console.log("route get( / ) - index")
        res.render('reviews-index', {reviews: reviews});
        console.log("renders(reviews-index)")
        console.log("-----")
      }).catch(err => {
        console.log(err);
      });
  });

//GET review
  app.get('/reviews/new', (req, res) => {
    console.log("route get(/reviews/new) - new form")
    res.render('reviews-new', {});
    console.log("renders(reviews-new)")
    console.log("-----")
  });

//POST review
  app.post('/reviews', (req, res) => {
    Review.create(req.body)
      .then((review) => {
        console.log("that review id")
        console.log(review._id);
        console.log("route post(/reviews) - redirect(reviews/:id)")
        res.redirect(`/reviews/${review._id}`); // Redirect to reviews/:id
        console.log("back(reviews-show)")
        console.log("-----")
      }).catch((err) => {
        console.log(err.message);
    });
  });

//GET specific rev
  app.get('/reviews/:id', (req, res) => {

    Review.findById(req.params.id)
    .then((review) => {
      Comment.find({ reviewId: req.params.id })
        .then(comments => {
          console.log("route get('/reviews/:id - get the comments included")
          res.render('reviews-show', {
            review: review, 
            comments: comments
          })
          console.log("renders(reviews-show)")
          console.log("-----")
        })
    }).catch((err) => {
      console.log(err.message);
    });
  });

  //GET edit review
  app.get('/reviews/:id/edit', function (req, res) {
    Review.findById(req.params.id, function(err, review) {
      res.render('reviews-edit', {review: review});
      console.log("route get(/reviews/:id/edit) - ")
      console.log("renders(reviews-edit)")
      console.log("-----")
    });
  });

  //PUT
  app.put('/reviews/:id', (req, res) => {

    Review.findByIdAndUpdate(req.params.id, req.body)
      .then(review => {
        res.redirect(`/reviews/${review._id}`);
        console.log("route put(/reviews/:id)")
        console.log("back()")
        console.log("-----")
      }).catch(err => {
        console.log(err.message);
      });
  });

  // DELETE
  app.delete('/reviews/:id', function (req, res) {

    Review.findByIdAndRemove(req.params.id)
    .then((review) => {
      res.redirect('/')
      console.log("route delete(/reviews/:id)")
      console.log("back to the root route")
      console.log("-----")
    }).catch((err) => {
      console.log(err.message);
    });
  });
}

module.exports = reviews;