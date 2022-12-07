import {DataTypes} from 'sequelize'
import {sequelize} from '../database/databaseConnection'
import { Order } from './Orders.models';

// creation users model
export const User = sequelize.define('users', {
    id_user:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_rol:{
        type: DataTypes.INTEGER
      }
});

User.hasMany(Order, {
  foreignKey: 'domiciliary'
})