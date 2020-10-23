const testServer = require('../../utils/testServer');

const baseRoute = '/cats-breed';
const baseMock = 'Cats';

describe(`[${baseMock}] ENDPOINTS`, function () {
  jest.setTimeout(10000);

  const route = require('../../api/cats/routes');
  const request = testServer(route);

  it(`[GET] Should return a collection of ${baseMock}`, function(done) {
    request.get(`${baseRoute}/all/`).end((err, res) => {
      expect(res.body).toMatchObject({
        error: expect.any(Boolean),
        status: expect.any(Number),
        data: expect.any(Array)
      });
      done();
    });
  });

  it(`[SEARCH] Should return a error object of ${baseMock}`, function (done) {
    request.get(`${baseRoute}/search/abys`).end((err, res) => {
      expect(res.body).toMatchObject({
        error: expect.any(Boolean),
        status: expect.any(Number),
        data: expect.any(Object)
      });
      done();
    });
  });

  it(`[SEARCH] Should return a ERROR object of ${baseMock}`, function (done) {
    const RESULT = {
      status: 500,
      error: 'NO_PARAMS_CAT_NAME',
      data: false
    };
    request.get(`${baseRoute}/search/`).end((err, res) => {
      expect(res.body).toMatchObject(RESULT);
      done();
    });
  });
});
