var jwt = require('jsonwebtoken');
var {users}=require('../models/index')

const auth=(req,res,next) => {
    if(req.header('x-auth')){
        let token=req.headers('x-auth')

        try{
            let tokenData=jwt.verify(token,process.env.JWT_SECRET)
            let findUser=users.findOne({
                where:{
                   email: tokenData.email,
                   id: tokenData.id 
                }
            })

            if(findUser){
                req.user=findUser
                next()
            }else{
                res.status(400).json({
                    ok:false,
                    error: 'User not found'
                })
            }

        }catch(err){
            res.status(400).json({
                ok:false,
                auth:false,
                errors: err.message 
            })
        }

    }else{
        res.status(400).json({
            ok:false,
            auth:false,
            errors: 'Token must be provided'
        })
    }
}

module.exports=auth