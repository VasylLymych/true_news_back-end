const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const Siofu = require("socketio-file-upload");
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
app.use(Siofu.router);
app.use('/news', newsRouter);

const server = http.createServer(app);
const io = require("socket.io")(server);

io.on('connect', socket => {
    let uploader = new Siofu();
    uploader.listen(socket);
    uploader.dir = "./images";
    let currentNewsItem = {category: "", newsItem: null};

    uploader.on("saved", async event => {
        currentNewsItem.newsItem.photo = event.file.pathName;

        if (currentNewsItem.category === "UkraineNews") {

            await addUkraineNewsItemService(currentNewsItem.newsItem);

            io.emit("UkraineNewsItemAdded");

            currentNewsItem = {};
        }
        if (currentNewsItem.category === "worldNews") {

            await addWorldNewsItemService(currentNewsItem.newsItem);

            io.emit("worldNewsItemAdded");

            currentNewsItem = {};
        }
    });
    socket.on("addUkraineNewsItem", async data => {
        data.date = new Date().toLocaleString();
        currentNewsItem.category = "UkraineNews";
        currentNewsItem.newsItem = data;
    });
    socket.on("addWorldNewsItem", async data => {
        data.date = new Date().toLocaleString();
        currentNewsItem.category = "worldNews";
        currentNewsItem.newsItem = data;

    });
    socket.on("disconnect", () => console.log("disconnected"))
});

server.listen(5000, err => {
    err ? console.log(err.message) : console.log('Listening 5000...')
})
