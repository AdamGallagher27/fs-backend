import app from "../app.js"
import request from "supertest"


describe('API Tests', () => {

  // test response for end point with data about japan
  it('should return a response from the API', async () => {
    const response = await request(app).get('/api/country/japan')
    expect(response.status).toBe(200)
    expect(...response.body).toHaveProperty('name')
  })

  // test response for end point with no data
  it('should handle not found', async () => {
    const response = await request(app).get('/api/country/NonExistentCountry')
    expect(response.text).toBe('not found')
  })

})