'use strict';

const mock = require('egg-mock');

describe('test/super-types.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/super-types-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, superValidator')
      .expect(200);
  });
});
