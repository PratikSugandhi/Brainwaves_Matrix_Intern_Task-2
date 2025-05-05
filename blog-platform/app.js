
const express = require('express');
const path = require('path');
const app = express();
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', authRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
