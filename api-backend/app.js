const express = require('express');
const app = express();
const slash = require('express-slash');
const cors = require('cors')
const helmet = require('helmet');
const axios = require('axios');
const { API_URL, API_KEY } = require('./config');

app.get('/hello', function (req, res) {
  res.send('[GET] Cat Nations API HELLO');
});

app.get('/cats-breed', function (req, res) {
  axios({
    method: 'get',
    url: `${API_URL}/v1/breeds`,
    auth: {
        'x-api-key': API_KEY
    }
  })
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
      console.log(error);
  });
});

// Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares
app.use(helmet());
app.use(slash());

module.exports = app;