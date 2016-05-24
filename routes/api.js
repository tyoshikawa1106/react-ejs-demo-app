var express = require('express');
var router = express.Router();

router.get('/comments', function(req, res) {
  res.json(data);
});

router.post('/comments', function(req, res) {
  
  var comments = data;
  // NOTE: In a real implementation, we would likely rely on a database or
  // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
  // treat Date.now() as unique-enough for our purposes.
  var newComment = {
    id: Date.now(),
    author: req.body.author,
    text: req.body.text,
  };
  comments.push(newComment);
  res.json(comments);
});

module.exports = router;

var data = [
  {
    "id": 1388534400000,
    "author": "Pete Hunt",
    "text": "Hey there!"
  },
  {
    "id": 1420070400000,
    "author": "Paul O’Shannessy",
    "text": "React is *great*!"
  }
];