const express=require('express')
const router=express.Router()

const {registerValidations, loginValidations}=require('../validations/userValidation')
const userControllers=require('../controllers/userControllers')

router.post('/register',registerValidations,userControllers.register)
router.post('/login',loginValidations, userControllers.login)

module.exports=router