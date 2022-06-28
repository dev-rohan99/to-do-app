const mongoose = require('mongoose');


const ToDoDataSchema = mongoose.Schema({
    ToDoTitle : {
        type : String
    },
    ToDoPosition : {
        type : String
    },
    ToDoDate : {
        type : Date,
        default : Date.now()
    }
}, {
    versionKey : false
});



const toDoModel = mongoose.model('todolists', ToDoDataSchema);

module.exports = toDoModel;

