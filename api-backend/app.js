const express = require('express');
const app = express();
const slash = require('express-slash');
const cors = require('cors');
const helmet = require('helmet');

const {
  notFoundHandler,
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/errorHandlers');

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

app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

module.exports = app;
