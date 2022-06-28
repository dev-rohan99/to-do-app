const { toDoModel } = require("../models/toDoModel");




const ToDoGet = (req, res) => {

    toDoModel.find((err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }
    });

}



const ToDoCreate = (req, res) => {

    toDoModel.create(req.body, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }
    });

}


module.exports = {
    ToDoCreate,
    ToDoGet
}




