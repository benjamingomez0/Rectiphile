const mongoose = require('mongoose')
const Schema = mongoose.Schema

const masterSchema= new Schema({
    name:String,
    userLeader:String,
    masterFile:String,
    versions:[String],
    dateCreated:{
        type: Date,
        default: Date.now
      },
    key:String  
})
const Master = mongoose.model('Master',masterSchema)

module.exports = Master