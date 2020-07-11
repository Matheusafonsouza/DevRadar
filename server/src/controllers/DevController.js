//imports
const axios = require('axios');
const Dev = require('../models/Dev');

//methods
module.exports = {
    async create(req, res) {
        const { github_username, techs } = req.body;

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        const { name = login, avatar_url, bio } = apiResponse.data;

        const techsArray = techs.split(',').map(tech => tech.trim());

        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
        });

        return res.json(dev);
    }
}