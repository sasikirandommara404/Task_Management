const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
const mongoose = require('mongoose')
const router = require('./router.js')

app.use(express.json())
app.use(cors())



const fun = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://sasikiran9949:sasi9381@cluster0.psevtbo.mongodb.net/task_db")
        console.log('Connected SucessFully ')
        console.log(`server is running at http://localhost:${port}/user`)


    }catch(err){
        console.log('failed to connect ')

    }
}
fun()
app.use('/user',router)
app.listen(port,(err)=>{
    if(err){
        console.log('Something is went Wrong')
    }else{
        console.log('Sucessfully running server')
    }
})

