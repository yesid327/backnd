import {DataTypes} from 'sequelize'
import {sequelize} from '../database/databaseConnection'

// creation orders model
export const Order = sequelize.define('orders', {
    id_order:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    content:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    cost:{
        type: DataTypes.FLOAT
    },
    payment_method:{
        type:DataTypes.ENUM('Online', 'Punto de pago', 'Contra entrega')
    },
    order_data:{
        type:DataTypes.DATE
    },
    delivery_time:{
        type:DataTypes.STRING
    },
    domiciliary:{
        type:DataTypes.INTEGER
    },
    customer:{
        type:DataTypes.STRING
    },
    status:{
       type: DataTypes.ENUM("Open", "Close")
    }
})