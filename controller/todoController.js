const ToDo = require('../models/todo')


const addTaskToDoList = (todoTask, createdDate) => {
    return new Promise((resolve, reject) => {
        const todo = new ToDo({
            todoTask,
            createdDate
        })
        todo.save((toDoData, err) => {
            toDoData ? resolve(toDoData) : reject(err)
        })
    })
}

const getAllTheEntireToDoList = () => {
    return new Promise((resolve, reject) => {
        ToDo.find({}, {}, {
            allTask: {
                ToDo
            }
        }, (err, toDoData) => {
            err ? reject(err) : resolve(toDoData);
        });
    })
}

const deleteOneTask = (_id) => {
    return new Promise((resolve, reject) => {
        ToDo.deleteOne({}, {
            _id
        }, (err, toDoData) => {
            err ? reject(err) : resolve(toDoData);
        });
    })
}

module.exports = {
    addTaskToDoList,
    getAllTheEntireToDoList,
    deleteOneTask
}