const express=require('express')
const bodyParser=require('body-parser')
const models = require('./models')
const userRoutes=require('./routes/users')
const cors = require('cors')

const port=process.env.PORT || 5000
require('dotenv').config()

const app=express()
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
    ]
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users',userRoutes)

models.sequelize.authenticate().then(async() => {
    const con=models.sequelize
    console.log('connected to mysql db')
})

app.listen(port,() => {
    console.log(`app running on ${port}`)
})