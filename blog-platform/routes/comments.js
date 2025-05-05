
const express = require('express');
const router = express.Router();

router.post('/:postId/comments', (req, res) => {
  // Save comment to database here
  res.redirect('/posts');
});

module.exports = router;
