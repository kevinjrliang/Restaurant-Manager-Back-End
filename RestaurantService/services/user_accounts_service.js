const user_account_queries = require('../queries/user_accounts/queries');
const {UserAccount} = require('../classes/user_accounts/user_account_class');
const generic_errors = require('../errors/generic_errors');
const user_account_errors = require('../errors/user_account_errors');
const argon2 = require('argon2');

BigInt.prototype.toJSON = function() { return this.toString() }

const listUsers = async () => {
    const users = await user_account_queries.listUsers();
    return {
        error: false,
        status: 200,
        data: users
    }
}

const getUserById = async (id) => {
    const user = await user_account_queries.getUserById(id);
    if (user) {
        return {
            error: false,
            status: 200,
            data: user
        }
    }
    return {
        error: false,
        status: 200,
        data: {}
    }
}

const getUserByUsername = async (username) => {
    const user = await user_account_queries.getUserByUsername(username);
    if (user) {
        return {
            error: false,
            status: 200,
            data: user
        }
    }
    return {
        error: false,
        status: 200,
        data: null
    }
}

const createUser = async (username, password, access_level, restaurant_name, location, phone_number) => {
    const user = await getUserByUsername(username);
    if (user.data) {
        return {
            error: true,
            status: 400,
            data: user_account_errors.UsernameAlreadyExistsError
        }
    }
    else {
        const passwordHash = await argon2.hash(password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            hashLength: 32,
            parallelism: 4,
            timeCost: 3,
            saltLength: 16
          });
        const user_data = new UserAccount(username, passwordHash, access_level, restaurant_name, location, phone_number)
        const new_user = await user_account_queries.createUser(user_data);
        if (new_user) {
            try {
                return {
                    error: false,
                    status: 201,
                    data: new_user
                }
            } catch (err) {
                return {
                    error: true,
                    status: 500,
                    data: generic_errors.ExceptionError(err)
                }
            }
        }
        else {
            return {
                error: true,
                status: 500,
                data: user_account_errors.FailedToCreateAccountError
            }
        }
    }
}

const login = async (username, password) => {
    const user = await getUserByUsername(username);
    if (user.data) {
        try {
            if (await argon2.verify(user.data.passwordHash, password)) {
                return {
                    error: false,
                    status: 200,
                    data: user.data
                }
            }
          } catch (err) {
            return {
                error: true,
                status: 500,
                data: generic_errors.ExceptionError(err)
            }
          }
    }
    return {
        error: true,
        status: 400,
        data: user_account_errors.InvalidUsernameOrPasswordError
    }
}

module.exports = {
    listUsers: listUsers,
    getUserById: getUserById,
    getUserByUsername: getUserByUsername,
    createUser: createUser,
    login: login
  }