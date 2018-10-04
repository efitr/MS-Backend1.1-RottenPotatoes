
const Comment = require('../models/comment');

function comments(app) {

    app.post('/reviews/comments', (req, res) => {
        console.log("we made it")
        Comment.create(req.body)
            .then(comment => {
                console.log(comment);
                res.status(200).send({ comment: comment});
                res.redirect(`/reviews/${comment.reviewId}`);
            }).catch((err) => {
                res.status(400).send({err: err})
                //console.log(err.message);
            });
    });

    // DELETE
    app.delete('/reviews/comments/:id', function (req, res) {
        console.log("DELETE comment")
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.redirect(`/reviews/${comment.reviewId}`);
        }).catch((err) => {
            console.log(err.message);
        });
    });
}

module.exports = comments;