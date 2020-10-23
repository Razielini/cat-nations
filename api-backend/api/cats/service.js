const response = require('../../utils/responses');

function catsService(storeInjection) {
  const controller = require('./controller')

  let store = storeInjection;

  const Controller = controller(store);

  const getAll = async (req, res, next) => {
    try {
      const results = await Controller.getAll();
      response.success(req, res, results, 200);
    } catch (error) {
      next(error);
    }
  }

  const searchCat = async (req, res) => {
    const { params } = req;
    try {
      if(!params.catName) throw new Error ('NO_PARAMS_CAT_NAME');
      const results = await Controller.searchCat(params.catName);
      response.success(req, res, results, 200);
    } catch (error) {
      response.error(req, res, error.message, 500);
    }
  }

  return {
    getAll,
    searchCat
  }
}

module.exports = catsService;
