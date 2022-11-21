const express = require('express');
const user_account_service = require('./services/user_accounts_service')
const user_account_errors = require('./errors/user_account_errors')
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

app.post('/RestaurantService/api/user', async (request, response) => {
  const { username, password, access_level, restaurant_name, location, phone_number  } = request.body
  const user = await user_account_service.getUserByUsername(username);
  if (user) {
    response.status(400).send({error: user_account_errors.UsernameAlreadyExistsError});
  }
  else {
    const new_user = await user_account_service.createUser(username, password, access_level, restaurant_name, location, phone_number);
    if (new_user) {
      console.log(new_user);
      response.status(201);
      response.json(new_user);
    }
    else {
      response.status(500).send(user_account_errors.FailedToCreateAccountError);
    }
  }
});