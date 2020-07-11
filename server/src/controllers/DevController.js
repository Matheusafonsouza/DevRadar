//imports
const axios = require('axios');
const Dev = require('../models/Dev');
const { index } = require('../models/utils/PointSchema');

//methods
module.exports = {
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    async create(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        console.log(github_username)

        if (!dev) {
            console.log('@@@@@@@@@@@@@@@@@')
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;
    
            const techsArray = techs.split(',').map(tech => tech.trim());
    
            const location = {
                type: 'Point',
                coordinates: [longitude,latitude],
            };
    
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }

        return res.json(dev);
    }
}