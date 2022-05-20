const Task = require('../models/task');
const Action = require('../models/action');
const { populate } = require('../models/task');

console.log('Controller')

module.exports.home = async function(req, res){
    const totalHabits = await Task.countDocuments({}) 
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
            task: task,
            totalHabits: totalHabits
        });
    })

}
module.exports.details = async function(req, res){
    try{
        let task = await Task.findById(req.params.id).populate({
            path:'actions'
        }).exec(function (err, task) {
            return res.render('details',{
                title: "Details",
                task: task,
            });
        });
        
    }catch(err){
        console.log("Error in Showing Details", err);
        return res.redirect('back');
    }    
}
