const express = require('express');
const app = express();
const slash = require('express-slash');
const cors = require('cors')
const helmet = require('helmet');

//Routes Call
const catRoutes = require('./api/cats/routes');

//Models Call
const Cats = require('./models/Cats');

// Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares
app.use(helmet());

// Routes
catRoutes(app, Cats);

app.use(slash());

module.exports = app;