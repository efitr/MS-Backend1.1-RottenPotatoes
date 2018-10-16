
const Comment = require('../models/comment');

function comments(app) {

    app.post('/reviews/comments', (req, res) => {
        Comment.create(req.body).then(comment => {
            res.redirect(`/reviews/${comment.reviewId}`)
            console.log("route post(/reviews/comments) - redirects(/reviews/${comment.reviewId})")
            console.log("-----")
        }).catch((err) => {
            console.log(err.message)
        })
    });

    // DELETE
    app.delete('/reviews/comments/:id', function (req, res) {
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.redirect(`/reviews/${comment.reviewId}`);
            console.log("delete(/reviews/comments/:id) - redirect(/reviews/${comment.reviewId})")
            console.log("-----")
        }).catch((err) => {
            console.log(err.message);
        });
    });
}

module.exports = comments;