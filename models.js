const mongoose = require('mongoose')

const Task =new mongoose.Schema(
    {
    id:{type:String, required:true},
    title:{type:String, required:true},
    status:{type:Boolean, default:false}
},{timestamps:true}) 

const Task_Table = mongoose.model('Task_Table',Task)
module.exports = Task_Table