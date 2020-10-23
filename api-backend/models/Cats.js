const axios = require('axios');
const { API_URL, API_KEY } = require('../config/index');

class Cats {
  constructor() {}

  static async getAll() {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'get',
        url: `${API_URL}/v1/breeds`,
        auth: {
          'x-api-key': API_KEY
        }
      })
      .then(async function (response) {
        const data = await response.data.map(({ name, id }) => ({name, id }))
        resolve(data);
      })
      .catch(function (error) {
          reject(error);
      });
    });
  }

  static async searchCat(catsName) {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'get',
        url: `${API_URL}/v1/images/search?breed_id=${catsName}`,
        auth: {
          'x-api-key': API_KEY
        }
      })
      .then(async function (response) {
        if(JSON.stringify(response.data.length) > 0) {
          resolve(response.data[0].breeds[0]);
        } else {
          resolve(response.data);
        }
      })
      .catch(function (error) {
          reject(error);
      });
    });
  }
}

module.exports = Cats;
