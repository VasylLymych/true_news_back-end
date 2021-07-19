const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors")
const {addUkraineNewsItemService, addWorldNewsItemService} = require("./services")
const {newsRouter} = require("./routers")

mongoose.connect("mongodb://localhost/true_news", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({
    extended: true
}));
app.use('/news', newsRouter)

const server = http.createServer(app);
const io = require("socket.io")(server);

io.on('connect', socket => {
    socket.on("addUkraineNewsItem", async data => {
        data.date = new Date().toLocaleString()
        await addUkraineNewsItemService(data)
        io.emit("UkraineNewsItemAdded")
    })
    socket.on("addWorldNewsItem", async data => {
        data.date = new Date().toLocaleString()
        await addWorldNewsItemService(data)
        io.emit("worldNewsItemAdded")
    })
    socket.on("disconnect", () => console.log("disconnected"))
});

server.listen(5000, err => {
    err ? console.log(err.message) : console.log('Listening 5000...')
})
