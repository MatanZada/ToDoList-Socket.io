const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({
    todoTask: {
        type: String,
        required: "The filed task is a required filed!",
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})
toDoSchema.methods.testFunc = function testFunc(params) {}
module.exports = mongoose.model('ToDo', toDoSchema);