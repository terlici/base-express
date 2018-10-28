const express = require('express')
  , router = express.Router()
  , Comment = require('../models/comment')

router.get('/:id', (req, res) => {
  Comment.get(req.params.id, (err, comment) => {
    res.render('comments/comment', {comment})
  })
})

module.exports = router
