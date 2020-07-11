//imports
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//configs
const app = express();
mongoose.connect("mongodb+srv://guest:123@devradar.a4pcx.mongodb.net/devradar?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(routes);
app.use(express.json());

//listen
app.listen(4444);