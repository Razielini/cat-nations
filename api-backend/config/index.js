require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  API_URL: process.env.API_URL,
  API_KEY: process.env.API_KEY,
  SENTRY_DNS: process.env.SENTRY_DNS,
  SENTRY_ID: process.env.SENTRY_ID
};

module.exports = config;
