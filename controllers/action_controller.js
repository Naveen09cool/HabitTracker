const Task = require('../models/task');
const Action = require('../models/action');

module.exports.create= async function(req, res){

    try{
        let task = await Task.findById(req.body.task);
        if (task){
            let action = await Action.create({
                actionStatus: req.body.actionStatus,
                task: req.body.task,
            });
            task.actions.push(action);
            task.save();
            if (req.xhr){
                // action = await action.populate(['task', 'task.taskName']);    
                return res.status(200).json({
                    data: {
                        action: action
                    },
                    message: "Comment created!"
                });
            }
            res.redirect('/');
        }
    }catch(err){
        console.log("Erron in Action",err);
        return;
    }
    
}