// require library
const mongoose = require('mongoose');

// Schema
const taskSchema = new mongoose.Schema({
    taskName:{
        type: String,
        required: true,
        dateCreated:{type: Date, default: Date.now()}
    } ,
    actions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Action'
    },{timestamps:true}] 
},{timestamps:true})

const Task = mongoose.model('Task', taskSchema);
// exporting schema
module.exports = Task;