const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API 12312' });
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});