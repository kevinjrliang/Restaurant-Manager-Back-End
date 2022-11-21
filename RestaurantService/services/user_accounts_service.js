const user_account_queries = require('../queries/user_accounts/queries');
const {UserAccount} = require('../classes/user_accounts/user_account_class');

const listUsers = async () => {
    const users = await user_account_queries.listUsers();
    return users;
}

const getUserById = async (id) => {
    const user = await user_account_queries.getUserById(id);
    return user;
}

const getUserByUsername = async (username) => {
    const user = await user_account_queries.getUserByUsername(username);
    return user;
}

const createUser = async (username, password, access_level, restaurant_name, location, phone_number) => {
    const user_data = new UserAccount(username, password, access_level, restaurant_name, location, phone_number)
    const user = await user_account_queries.createUser(user_data);
    return user;
}

module.exports = {
    listUsers: listUsers,
    getUserById: getUserById,
    getUserByUsername: getUserByUsername,
    createUser: createUser
  }