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


router.post("/master", async(req,res) => {
    console.log("hitttttttttttt")
    console.log(req.body)
    const createdMaster =  await new Master({
            _id: new mongoose.Types.ObjectId(),
            name:req.body.name,
            user_id:req.body.user_id,
            masterFile:req.body.masterFile,
            versions:req.body.versions
        })

        res.json(createdMaster)
        console.log(createdMaster,"<===created master")
})
module.exports = router