import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
it('GET /api/cats', async () => {
  const expected = [
    {
      name: 'felix',
      //...
    },
    {
      name: 'garfield',
      //...
    }
  ];

  const response = await request.get('/api/cats');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});

// API routes for cats
app.get('/api/cats', (req, res) => {
  res.json([]);
});