const {body, check, param, query}=require('express-validator')

const registerValidations=[
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email address is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .trim()
]

const loginValidations=[
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email Address is required')
        .isEmail()
        .withMessage('Please enter a valid email')
        .trim(),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Please enter password')
        .trim()
]

module.exports={
    registerValidations,
    loginValidations
}