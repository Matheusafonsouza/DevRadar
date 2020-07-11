//imports
const { Router } = require('express');
const DevController = require('./controllers/DevController');

//config
const routes = Router();

//routes
    //post
routes.post('/devs', DevController.create);
    //get
routes.get('/devs', DevController.index);

module.exports = routes;