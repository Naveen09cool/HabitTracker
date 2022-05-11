const Task = require('../models/task');
const Action = require('../models/action');//will need for delete

module.exports.create = async function(req, res){
    try{
        let task = await Task.create({
            taskName: req.body.taskName,
        });        
        if (req.xhr){
            // post = await post.populate(['user', 'user.name']);
            return res.status(200).json({
                data: {
                    task: task
                },
                message: "task created!"
            });
        }
        return res.redirect('back');
    }catch(err){
        console.log('Error in Task',err);
        return res.redirect('back');
    }
  
}
