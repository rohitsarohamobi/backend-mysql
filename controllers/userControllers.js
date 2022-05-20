var {users}=require('../models/index')
var jwt = require('jsonwebtoken');

const userControllers={}

userControllers.register=async(req,res) => {
    try{

        let findUser=await users.findOne({
            where:{
                email: req.body.email
            }
        })

        if(findUser){
            res.status(400).json({
                status: false,
                message: 'User already exists'
            })
        }else{
            let data=await users.create({name:req.body.name, email: req.body.email, password: req.body.password})
            if(data){
                let tokenParams={
                    id: data.id,
                    email: data.email
                }

                const token=jwt.sign(tokenParams,process.env.JWT_SECRET,{ expiresIn: '1d' })
    
                res.status(200).json({
                    status: true,
                    record: data,
                    token
                })
            }
        }
    }catch(err){
        res.send({
            status: false,
            message: 'Failed'
        })
        console.log("error is ",err)
    }
}

userControllers.login=async(req, res) => {
    try{
        let data=await users.findOne({
            where:{
                email: req.body.email,
                password: req.body.password
            }
        })

        if(data){

            let tokenParams={
                email: data.email,
                id: data.id
            }

            let token=jwt.sign(tokenParams, process.env.JWT_SECRET, { expiresIn: '1d' })

            res.status(200).json({
                status: true,
                record: data,
                token
            })
        }else{
            res.status(200).json({
                status: false,
                message: 'Record not found'
            })
        }

    }catch(err){
        res.send({
            status: false,
            message: 'Failed'
        })
    }
}

module.exports=userControllers