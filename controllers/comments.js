var express = require('express')
  , router = express.Router()
  , Comment = require('../models/comment')

router.get('/:id', function(req, res) {
  Comment.get(req.params.id, function (err, comment) {
    res.render('comments/comment', {comment: comment})
  })
})

module.exports = router