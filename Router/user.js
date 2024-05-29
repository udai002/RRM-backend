const express = require('express')
const router = express.Router()
const Admin = require('../models/Admin')
const jwt  = require('jsonwebtoken')

// creating user for login
router.post('/api/createUser' , (req , res)=>{
    const {username , email , password} = req.body;
    if(username && email && password){
        Admin.create({username , email , password}).then(()=>{
            jwt.sign({username , email} , 'JWT' , (err , token)=>{
                return res.send({jwtToken:token})
            })
        }).catch(e=>{
            return res.status(400).send({err:"something went wrong"})
        })
    }else{
        res.status(400).send({err:"Internal server error , try again later"})
    }
    
})

// login for user
router.post('/api/login' , (req , res)=>{
    const {username , password} = req.body;
    const findUser = Admin.findOne({username , password})
    if(findUser){
        jwt.sign({username} , "JWT" , (error , token)=>{
            if(error){
                return res.status(500).send({err:"something went wrong"})
            }
            return res.send({jwtToken:token})
        })
    }else{
        return res.status(400).send({err:"User Not Found"})
    }
})





module.exports = router