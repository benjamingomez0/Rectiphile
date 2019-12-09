const express    = require('express');
const mongoose   = require('mongoose')
const router     = express.Router()
const bodyParser = require('body-parser');

//multer utilities
const multer     = require('multer');

const storage    = multer.diskStorage({
    destination: (req,file,cb)=>{
            cb(null,'./uploads');
    },
    filename: (req,file,cb)=>{
            cb(null, file.originalname);
    }
})
const upload     = multer({storage:storage})
//Model
const Master = require('../models/Masters')
// app.use(express.static('../client'));

router.post('/master',upload.single('masterFile'), async (req,res,next)=>{
    console.log(req.file)
    const createdMaster =  await Master.create(req.body)
    res.json(createdMaster)
    console.log(createdMaster)
})
module.exports = router