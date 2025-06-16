const express  = require('express')
const controller = require('./controller.js')
const router = express.Router()

router.get('/',controller.Get_All_Tasks)
router.post('/newtask',controller.Inserting_Tasks)
router.get('/getbyid/:id',controller.Get_Task_By_id)
router.put('/getbyidupdate/:id',controller.Get_By_Id_Update)
router.delete('/deletebyid/:id',controller.Delete_By_Id)

module.exports = router