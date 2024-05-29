const express = require('express')
const Dairy = require('../models/Dairy')
const router = express.Router()

//posting dairy details
router.post('/api/addDairy' , (req , res)=>{
    const {milkId , bookNo , fat , litres , value , date , isPaid  } = req.body
    try{
        Dairy.create({milkId , bookNo , fat , litres , value , date , isPaid}).then(()=>{
            return res.status(200).send({msg:"successfully created"})
        })
    }catch(e){
        return res.status(500).send({msg:"something went wrong" , e})
    }
    
})


// fetching all the dairy infomation
router.get('/api/getALlDairy', (req , res)=>{
    try{
        const response = Dairy.find({})
        response.then((data)=>{
           return res.status(200).send(data)
        })
       
    }catch(e){
        return res.status(500).send({msg:"something seriously went wrong" , e})
    }
})

// get dairy by id 
router.get("/api/getDairy/:id" , (req , res)=>{
    const {id} = req.params
    try{
        const response = Dairy.findOne({milkId:id})
        response.then((data)=>{
            return res.status(200).send(data)
        })
    }catch(e){
        return res.status(500).send({msg:"Something went wrong"})
    }
})

// updating dairy by id 
router.put('/api/updateDairy/:id' , async (req , res)=>{
    const {id} = req.params
    const {bookNo , litres , fat } = req.body
    try{
        const response = await Dairy.updateOne({milkId:id} , {bookNo , litres , fat})
        return res.send(response)
    }catch(e){
        return res.status(500).send({msg:"Something went wrong" , e})
    }
})


// deleting dairy by id 
router.delete('/api/deleteDairy/:id' , async (req , res)=>{
    const {id} = req.params
    try{
        const response = await Dairy.deleteOne({milkId:id})
        return res.send(response)
    }catch(e){
        return res.status(500).send({msg:"Something went wrong" , e})
    }
})




module.exports = router