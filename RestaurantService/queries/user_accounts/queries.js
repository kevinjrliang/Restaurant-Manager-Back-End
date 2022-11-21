const p = require('@prisma/client');
const prisma = new p.PrismaClient();

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'RestaurantService',
//   password: '123123', // Make sure this is the same as your postgres database password
//   port: 5432,
// })

const listUsers = async () => {
  const users = await prisma.user_account.findMany();
  return users;
}

const getUserById = async (id) => {
  const user = await prisma.user_account.findFirst({
    where: { id }
  });
  return user;
}

const getUserByUsername = async (username) => {
  const user = await prisma.user_account.findFirst({
    where: { username }
  });
  return user;
}

const createUser = async (data) => {
  const user = await prisma.user_account.create({
    data: data
  });

  return user;
}

module.exports = {
  listUsers: listUsers,
  getUserById: getUserById,
  getUserByUsername: getUserByUsername,
  createUser: createUser
}