import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'RestaurantService',
  password: '123123',
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

  const addRestaurant = (request, response) => {
    pool.query('INSERT INTO restaurant VALUES', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }