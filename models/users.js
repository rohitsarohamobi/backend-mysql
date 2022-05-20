'use strict'

module.exports=(sequelize, DataTypes) => {
    const users=sequelize.define('users',{
        id:{
            allowNull:true,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com'
        },
        password:{
            type: DataTypes.STRING
        }
    },{
        tableName: 'users'
    })

    return users

}