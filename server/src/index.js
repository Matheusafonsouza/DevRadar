//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const { setupWebsocket } = require('./websocket');

//configs
const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect("mongodb+srv://guest:123@devradar.a4pcx.mongodb.net/devradar?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//listen
server.listen(3333);