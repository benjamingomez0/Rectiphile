const express    = require('express');
const mongoose = require('mongoose')
const router     = express.Router()
const multer     = require('multer');
const bodyParser = require('body-parser');
const upload     = multer({dest:'uploads/'})
const Master = require('../models/Masters')
// app.use(express.static('../client'));

router.post('/master',upload.single('masterFile'), async (req,res,next)=>{
    console.log(req.file)
    const createdMaster =  await Master.create(req.body)
    res.json(createdMaster)
    console.log(createdMaster)
})
module.exports = router