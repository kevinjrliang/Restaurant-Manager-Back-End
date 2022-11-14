const p = require('@prisma/client');
const prisma = new p.PrismaClient()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'RestaurantService',
  password: '123123', // Make sure this is the same as your postgres database password
  port: 5432,
})

const getUsers = (request, response) => {
  prisma.
    pool.query('SELECT * FROM restaurant ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getUser = (request, response) => {
  console.log(request.body)
  response.status(200)
  }

  const addRestaurant = (request, response) => {
    pool.query('INSERT INTO restaurant VALUES', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addRestaurant: addRestaurant
}