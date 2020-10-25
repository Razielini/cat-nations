const store = require('../../models/Cats');
const controller = require('./controller');

module.exports = controller(store);
