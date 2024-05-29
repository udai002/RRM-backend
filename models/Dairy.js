const mongoose = require('mongoose')


const dairySchema = mongoose.Schema({
    milkId:{type:String , unique:true , required:true},
    bookNo:{type:Number , required:true},
    litres:{type:Number, required:true},
    fat:{type:Number , default:0},
    value:{type:Number , default:0.0},
    isPaid:{type:Boolean , default:false},
    date:{type:Date , default:Date.now()}
    })

module.exports = mongoose.model('Dairy' , dairySchema)

