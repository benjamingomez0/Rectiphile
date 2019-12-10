const express    = require('express');
const app        = express()
const mongoose   = require('mongoose')
const router     = express.Router()
const bodyParser = require('body-parser');

//Model
const Master = require('../models/Masters')


router.get('/master', (req,res)=>{
    return res.send('GET HTTP method on user resource');
})

//uploading master
router.post("/master", async(req,res) => {
    console.log(req.body, "HELLO WE ARE HERE!~!!!")
    const createdMaster =  await Master.create({
            _id: new mongoose.Types.ObjectId(),
            name:req.body.name,
            userLeader:req.body.userLeader,
            masterFile:req.body.masterFile,
            versions:req.body.versions,
            key:req.body.key
        })

        res.json(createdMaster)
        console.log(createdMaster,"<===created master")
})
module.exports = router