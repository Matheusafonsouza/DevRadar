//imports
const mongoose = require('mongoose');

//schema
const DevSchema = mongoose.Schema({
    name: String,
    github_user_name: String,
    bio: String,
    avatar_url: String,
    techs: [String],
});

module.exports = mongoose.model('Dev', DevSchema);