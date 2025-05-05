
const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', async (req, res) => {
  const [posts] = await db.execute('SELECT * FROM posts');
  res.render('posts/index', { posts });
});

module.exports = router;
