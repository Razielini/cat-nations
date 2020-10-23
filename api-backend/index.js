const app = require('./app');
const { PORT } = require('./config');

// Server
const server = app.listen(PORT, () => {
  console.log(`Listen:: http://localhost:${server.address().port}`);
});
