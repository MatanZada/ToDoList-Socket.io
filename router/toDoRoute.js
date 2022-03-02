const express = require('express'),
    router = express.Router();

let {
    addTaskToDoList,
    getAllTheEntireToDoList,
    deleteOneTask
} = require('../controller/todoController')

router.post('/', (req, res) => {
    const {
        todoTask,
        createdDate
    } = req.body
    addTaskToDoList(todoTask, createdDate)
        .then((toDoData) => res.json(toDoData))
        .catch((error) => res.json(error))
})
router.get('/', (req, res) => {
    getAllTheEntireToDoList()
        .then((toDoData) => res.json({
            toDoData
        }))
        .catch((error) => res.json(error))
})

router.delete('/:delete', (req, res) => {
    deleteOneTask(req.params.delete)
        .then((toDoData) => res.json(toDoData))
        .catch((error) => res.json(error))
})


module.exports = router;