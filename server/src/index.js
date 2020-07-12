//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

//configs
const app = express();
mongoose.connect("mongodb+srv://guest:123@devradar.a4pcx.mongodb.net/devradar?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//listen
app.listen(3333);