const Task = require('./models.js')

const Get_All_Tasks = async (req,res)=>{
    try{
        all_users = await Task.find({})
        if(all_users){
            res.json(all_users)
        }else{
            res.json({
                message:'No Records Found IN DataBase'
            })
        }

    }catch(err){
        res.json({
            message:err
        })

    }

}
const Inserting_Tasks = async (req,res)=>{
    try{
        new_task = new Task(req.body)
        isSaved = await new_task.save()
        res.json({
            data:isSaved,
            message:'Sucessfully Created'
        })
    }catch(err){
        res.json({
            message:'Invalid Data or Crenditials '
        })

    }

}
const Get_Task_By_id = async (req,res)=>{
    const id = req.params.id
    try{
        const task = await Task.findOne({id:id})
        if(task){
            res.json({
                status:'Sucess',
                data:task

            })
        }else{
            res.json({
                data:'No user Found'
            })
        }
    }catch(err){
        res.json({
            message:err
        })
    }
}
const Get_By_Id_Update = async (req,res)=>{
    const id = req.params.id
    try{
        const updated_user = await Task.findOneAndUpdate({id:id},req.body,{new:true,runValidators:true})
        if(updated_user){
            res.json({
                status:'Updated Sucessfully',
                data:updated_user

            })
        }else{
            res.json({
                message:'No Data Found'
            })
        }

    }catch(err){
        res.json({
            message:err
        })
    }
}
const Delete_By_Id = async (req,res)=>{
    const id = req.params.id
    try{
        const deleted = await Task.findOneAndDelete({id:id})
        if(deleted){
            res.json({
                message:'Deleted Sucessfully'
            })
        }else{
            res.json({
                message:'No Results Found'
            })
        }
    }catch(err){
        res.json({
            message:err
        })

    }
}
module.exports ={
    Get_All_Tasks,
    Inserting_Tasks,
    Get_Task_By_id,
    Get_By_Id_Update,
    Delete_By_Id
}
