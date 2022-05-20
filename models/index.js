const {Sequelize, DataTypes} = require('sequelize')
const fs=require('fs')
const path =require('path')

const basename = path.basename(__filename)

const sequelize = new Sequelize('demo', 'root', '',{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool:{max:150 , min:0,acquire:30000, idle:10000}
})

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

fs.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.')!==0 && file!==basename && file.slice(-3)==='.js')
}).forEach(file => {
    const modelName=file.slice(0,-3)
    db[modelName]=require('./'+file)(sequelize,DataTypes)
})

// db.sequelize.sync({force: true})
// .then(() => {
//     console.log('yes re sync')
// })

module.exports=db