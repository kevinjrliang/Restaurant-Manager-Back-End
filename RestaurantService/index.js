const express = require('express');
const queries = require('./queries.js');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/user', (request, response) => {
    queries.getUser(request, response);
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});