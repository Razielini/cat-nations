module.exports = function (injectedStore) {
  let store = injectedStore;

  if (!store) store = require('../../__mocks__/cats.mocks').Cats;

  const getAll = async () => {
    const results = await store.getAll();
    return results;
  }

  const searchCat = async catsName => {
    const results = await store.searchCat(catsName);
    return results;
  }

  return {
    getAll,
    searchCat
  };
};
