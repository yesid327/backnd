import {DataTypes} from 'sequelize'
import {sequelize} from '../database/databaseConnection'
import { User } from './users.models'

// creation roles model
export const Rol = sequelize.define('roles',{
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    }
})

Rol.hasMany(User, {
    foreignKey: 'id_rol'
})