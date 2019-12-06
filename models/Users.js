const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user
const userSchema = new Schema({
    _id:String,
    email:String,
    displayName: String,
    organization:String,

},{
    _id:false
});

const User = mongoose.model('User',userSchema)

module.exports = User