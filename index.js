const express = require('express')
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv').config() 
const userRoute = require('./Router/user')
const dairyRoutes = require('./Router/dairyRoutes')
// const mongoose = require('mongoose')
const Port = dotenv.parsed.PORT || 3000
app = express()

//connecting to mongodb altas using mongoose
mongoose.set("strictQuery" , false)
const connectMongo = async ()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://karumuriudaisai002:udai123@cluster0.4o0q2x6.mongodb.net/')
        // console.log("mongodb connected...." , conn)
    }catch(e){
        console.log(e)
    }
}

connectMongo()

app.use(express.json())

app.get('/' , (req , res)=>{
    res.send({message:"Welcome to express app"})
})



app.use('/' ,userRoute)
app.use('/' ,dairyRoutes)

// ********* write your code here *********

app.listen(Port , ()=>{
    console.log(`app is listening... at http://localhost:${Port}`)
})

module.exports = app
