const Task = require('../models/task');
const Action = require('../models/action');
const { populate } = require('../models/task');

console.log('Controller')

module.exports.home = function(req, res){
    // Task.find({}, function(err,task){
    //     if(err){
    //         console.log('Error fetching task');
    //         return;
    //     }
    //     return res.render('home',{
    //         title: "HOME",
    //         task: task
    //     })
    // })

    Task.find({})
    .populate({
        path:'actions',
        // populate:{
        //     path:'action'
        // }
    })
    .exec(function (err, task) {
        return res.render('home',{
            title: "HOME",
            task: task
        });
    })

}

// module.exports.create_task = function(req, res){
//     Task.create({
//         taskName: req.body.taskName,
//         actions: []
//     },function(err, newTask){
//         if(err){
//             console.log('Error creating task',err);
//             return;
//         }
//         return res.redirect('back');
//     })
// }
