const express = require('express');
const app = express();
const slash = require('express-slash');
const cors = require('cors')
const helmet = require('helmet');

app.get('/hello', function (req, res) {
  res.send('[GET] Cat Nations API HELLO');
});

// Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares
app.use(helmet());

app.use(slash());

module.exports = app;