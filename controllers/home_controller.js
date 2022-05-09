const Task = require('../models/task');
const Action = require('../models/action');

console.log('Controller')

module.exports.home = function(req, res){
    Task.find({}, function(err,task){
        if(err){
            console.log('Error fetching task');
            return;
        }
        return res.render('home',{
            title: "HOME",
            task: task
        })
    })
}

module.exports.create_task = function(req, res){
    Task.create({
        taskName: req.body.taskName
    },function(err, newTask){
        if(err){
            console.log('Error creating task',err);
            return;
        }
        return res.redirect('back');
    })
}

module.exports.action_status =async function(req, res){
    let task =await Task.findOne(req.body.taskName)
    console.log(task);
    if(task){
        console.log('dadads');
        let action = await Action.create({
            actionStatus: req.body.actionStatus,
        }) 
        console.log(task.actions);
        task.actions.push(action);
        task.save();
        res.redirect('/');
    }
}


// module.exports.action_status = function(req, res){
//     console.log(req.body);
//     Action.findOne({req.body.})
// }