// require library
const mongoose = require('mongoose');

// Schema
const actionSchema = new mongoose.Schema({
    actionStatus :{
        type: String,
    },
    dateRecord: {
        type: Date, default: Date.now()
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }
},{timestamps:true})

const Action = mongoose.model('Action', actionSchema);
// exporting schema
module.exports = Action;