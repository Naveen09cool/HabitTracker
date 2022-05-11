const Task = require('../models/task');
const Action = require('../models/action');


module.exports.create= async function(req, res){
    try{
    console.log("dajiasd",req.body);
        
        let task = await Task.findById(req.body.task);
    console.log("dsas",task);

        if (task){
            let action = await Action.create({
                actionStatus: req.body.actionStatus,
                task: req.body.task,                
            });
            
            task.actions.push(action);
            task.save();
        }
        if (req.xhr){
            return res.status(200).json({
                data: {
                    actionStatus: actionStatus
                },
                message: "Status created!"
            });
        }
           return res.redirect('/');
    }catch(err){
        console.log("Erron in Action",err);
        return;
    }
    
}