const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/search', (req, res) => {
  const query = req.query.q; // Get the search query from the request query parameters

  // Make a GET request to the Naver Map API
  axios.get('https://navermapsapi.com/path/to/api', {
    params: {
      query: query,
      // Add other parameters as required by the API
    },
    headers: {
      'X-Naver-Client-Id': 'KqXg5i837RnlnlL1Gths',
      'X-Naver-Client-Secret': 'MqCrttYPEW'
    }
  })
    .then(response => {
      // Process the API response and send it back to the client
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error occurred while fetching data from Naver Map API.');
    });
});

app.listen(port, () => {
  console.log(Server is running on port ${8080});
});
