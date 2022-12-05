const express = require('express');
const user_account_service = require('./services/user_accounts_service')
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API 12312' });
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

app.post('/RestaurantService/api/user', async (request, response) => {
  const { username, password, access_level, restaurant_name, location, phone_number  } = request.body
  const res = await user_account_service.createUser(username, password, access_level, restaurant_name, location, phone_number);
  response.status(res.status).send(res);
});

app.get('/RestaurantService/api/user', async (request, response) => {
  const { username, id  } = request.body
  if (username) {
    const res = await user_account_service.getUserByUsername(username);
    response.status(res.status).send(res);
  }
  else {
    const res = await user_account_service.getUserById(id);
    response.status(res.status).send(res);
  }
});

app.get('/RestaurantService/api/users', async (request, response) => {
  const res = await user_account_service.listUsers();
  response.status(res.status).send(res);
});

app.get('/RestaurantService/api/login/:username/:password', async (request, response) => {
  const { username, password  } =  request.params
  const res = await user_account_service.login(username, password);
  response.status(res.status).send(res);
});