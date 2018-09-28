const expect = require('expect')
const app = require('../../node/web-server/server').app
const request = require('supertest')

describe('Server', () => {
  describe('/GET', () => {
    it('should be send users object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toInclude({name: 'Mirko',age:52})
        })
        .end(done)
    })
  })
})


