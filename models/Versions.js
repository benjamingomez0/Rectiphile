const mongoose = require('mongoose')
const Schema = mongoose.Schema

const versionSchema= new Schema({
    name:String,
    versionFile:String,
    master:String,
    dateCreated:{
        type: Date,
        default: Date.now
      },
    key:String  
})
const Version = mongoose.model('Version',versionSchema)

module.exports = Version