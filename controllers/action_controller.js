const Task = require('../models/task');
const Action = require('../models/action');


// To create action, Status of habit DONE or NOT DONE
module.exports.create= async function(req, res){
    console.log(req.body)
    console.log(req.params)
    try{            
        let task = await Task.findById(req.body.task);
        if (task){
            if(task.actions.length==0){
                Action.create(req.body,function(err,action){
                    if(err){
                        console.log(err);
                        return;
                    }
                    let prevActions=task.actions;
                    task.actions = [action,...prevActions];
                    task.save()
                    console.log("action created:");
               }) 
            }else{
                let id = task.actions[0]._id;
                let actionCheck = await Action.findById(id);//check if action already exists   
                    if(actionCheck.dateRecord.toString().slice(0,10) == Date().toString().slice(0,10)){    
                        //UPDATE 
                        actionCheck.actionStatus=req.body.actionStatus;
                        actionCheck.save()
                        console.log("action Updated:",req.body.actionStatus);                    
                    }else{
                        Action.create(req.body,function(err,action){
                            if(err){
                                console.log(err);
                                return;
                            }
                            let prevActions=task.actions;
                            task.actions = [action,...prevActions];
                            task.save()
                            console.log("action created:");
                        })                               
                    }
            }
    }
           return res.redirect('/');
    }catch(err){
        console.log("Erron in Action",err);
        return;
    }
    
}