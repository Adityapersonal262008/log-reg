// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

// Create an Express application
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/aditya-website', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

// Use authRouter for authentication routes
app.use('/auth', authRouter);

// Define routes
app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/register', function(req, res) {
  res.render('register');
});

// Start the server
app.listen(8080, function() {
  console.log('Server started on port 8080');
});