const mongoose = require('mongoose')
const Schema = mongoose.Schema

const masterSchema= new Schema({
    name:String,
    user_id:String,
    masterFile:String,
    versions:[String]
    
})
const Master = mongoose.model('Master',masterSchema)

module.exports = Master