const { Router } = require('express');
const router = Router();

const catsService = require('./service');

function catRoutes(app, store) {
  const CatsService = catsService(store);
  app.use('/cats-breed', router);

  router.get('/all', CatsService.getAll);
  router.get('/search/:catName?', CatsService.searchCat);
}

module.exports = catRoutes;
