//imports
const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

//schema
const DevSchema = new mongoose.Schema({
    name: String,
    github_user_name: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    }
});

module.exports = mongoose.model('Dev', DevSchema);