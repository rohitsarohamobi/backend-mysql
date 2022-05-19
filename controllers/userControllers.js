var {users}=require('../models/index')

const userControllers={}

userControllers.register=async(req,res) => {
    try{
        let data=await users.create({name:req.body.name, email: req.body.email})
        res.status(200).json({
            status: true,
            record: data
        })
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
                email: req.body.email
            }
        })

        if(data){
            res.status(200).json({
                status: true,
                record: data
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