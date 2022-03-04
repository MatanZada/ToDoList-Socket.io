const express = require("express")
const app = express(),
    port = process.env.PORT || 3000
const mongoose = require("mongoose")
const toDoRoute = require("./router/toDoRoute")


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/todo', toDoRoute)
app.use(express.static(__dirname));

mongoose
    .connect("mongodb://0.0.0.0:27017/toDoListApp").then(() => {
        const server = app.listen(port, () => {
            console.info(`start server start listening on port http://localhost:${port}`);
            const io = require("socket.io")(server);
            io.on("connection", (socket) => {
                console.log("A user connected");
                socket.on("add-todo", (toDo) => {
                    io.emit("get-todo", toDo);
                })
            });

        })
    }).catch(err => console.error(err))

app.get('/', (req, res) => {
    return res.json({
        hello: "world"
    })
})