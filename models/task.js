// require library
const mongoose = require('mongoose');

// Schema
const taskSchema = new mongoose.Schema({
    taskName:{
        type: String,
        // unique: true,
        required: true,
        // dateCreated:{type: Date, default: Date.now()}
    } ,
    actions:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Action'
        }
    ] 
},{timestamps:true})

const Task = mongoose.model('Task', taskSchema);
// exporting schema
module.exports = Task;