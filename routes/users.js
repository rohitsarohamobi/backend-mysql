const express=require('express')
const errorHandler=require('../common/errorHandler')
const router=express.Router()

const {registerValidations, loginValidations}=require('../validations/userValidation')
const userControllers=require('../controllers/userControllers')

router.post('/register',registerValidations,errorHandler,userControllers.register)
router.post('/login',loginValidations,errorHandler, userControllers.login)

module.exports=router