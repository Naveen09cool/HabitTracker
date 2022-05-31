const Task = require('../models/task');
const Action = require('../models/action');//will need for delete

// Creating a Habit
module.exports.create = async function(req, res){
    try{
        let task = await Task.create({
            taskName: req.body.taskName,
        }); 
        return res.redirect('back');
    }catch(err){
        console.log('Error in Task',err);
        return res.redirect('back');
    } 
}

// Deleting a habit
module.exports.destroy = async function(req, res){
    try{
        let task = await Task.findById(req.params.id);
            task.remove();
            await Action.deleteMany({task: req.params.id});
            return res.redirect('/');
    }catch(err){
        return res.redirect('back');
    }    
}