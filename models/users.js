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
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE
          },
    },{
        tableName: 'users',
        timestamps: false
    })

    return users

}