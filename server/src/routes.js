//imports
const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

//config
const routes = Router();

//routes
    //post
routes.post('/devs', DevController.create);
    //get
routes.get('/devs', DevController.index);
routes.get('/search', SearchController.index);

module.exports = routes;