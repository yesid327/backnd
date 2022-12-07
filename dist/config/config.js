import { config } from 'dotenv'
config()

module.exports = {
  PORT: process.env.PORT,
  DB: {
    production: {
      dialect: process.env.PRODUCTION_DB_DIALECT,
      name: process.env.PRODUCTION_DB_NAME,
      host: process.env.PRODUCTION_DB_HOST,
      port: process.env.PRODUCTION_DB_PORT,
      user: process.env.PRODUCTION_DB_USER,
      password: process.env.PRODUCTION_DB_PASSWORD
    },
    JWT_SECRET: process.env.JWT_SECRET
  }
}