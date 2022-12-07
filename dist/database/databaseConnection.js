import { Sequelize } from 'sequelize'
import { DB } from '../config/config'

const sequelize = new Sequelize(DB.production.name, DB.production.user, DB.production.password, {
  host: DB.production.host,
  password:DB.production.password,
  dialect: DB.production.dialect
});

export { sequelize }