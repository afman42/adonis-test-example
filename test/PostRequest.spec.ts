import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Welcome', () => {
  test('ensure Post page works', async (assert) => {
    /**
     * Make request
     */
    const res = await supertest(BASE_URL).get('/post').expect(200).set('accept','application/json').expect('Content-Type',/json/)
    assert.equal(res.statusCode,200)
    assert.isArray(res.body)
  })
  test('ensure Post per page id hworks', async (assert) => {
    /**
     * Make request
     */
    const res = await supertest(BASE_URL).get('/post/2').expect(200).set('accept','application/json').expect('Content-Type',/json/)
    assert.equal(res.statusCode,200)
    assert.isObject(res.body)
  })
  test('ensure Save Post works', async (assert) => {
    /**
     * Make request
     */
    const res = await supertest(BASE_URL).post('/post').send({
      title: 'title 1',
      description: 'title 1',
      status: 'aktif'
    }).expect(200).set('accept','application/x-www-form-urlencoded')
    assert.equal(res.statusCode,200)
    assert.isObject(res.body)
  })

  // test('ensure delete Post per id works', async (assert) => {
  //   /**
  //    * Make request
  //    */
  //   const res = await supertest(BASE_URL).delete('/post/2?_method=delete').expect(200).set('accept','application/json').expect('Content-Type',/json/)
  //   assert.equal(res.statusCode,200)
  //   assert.isObject(res.body)
  //   // assert.equal(res.headers['Content-Type'],/json/)
  //   console.log(res.headers)
  // })
})
