should = require('should')

Comment = require('../../models/comment')

describe('Model Comment', function() {

  it('get', function(done) {
    var id = '5678'

    Comment.get(id, function(err, comment) {
      comment.id.should.eql(id)
      done()
    })
  })

})