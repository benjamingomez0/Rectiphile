const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user
const userSchema = new Schema({
    email:String,
    displayName: String,
    organization:String
});

const User = mongoose.model('User',userSchema)

module.exports = User