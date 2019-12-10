const express    = require('express');
const app        = express()
const mongoose   = require('mongoose')
const router     = express.Router()
const bodyParser = require('body-parser');

//Model
const Master = require('../models/Masters')
const Version = require('../models/Versions')

//master show route
router.get('masters/:id', async (req,res) =>{
    try
    {
       const foundMasters=  await Master.findById(req.params.id, (err,master)=>{
           if(err)
           {
               console.log(err)
           }
           else
           {
               res.json(master)
           }
       })
    }
    catch(err)
    {
        console.log(err)
    }
})

//version show route
router.get('versions/:id', async (req,res) =>{
    try
    {
       const foundMasters=  await Version.findById(req.params.id, (err,version)=>{
           if(err)
           {
               console.log(err)
           }
           else
           {
               res.json(master)
           }
       })
    }
    catch(err)
    {
        console.log(err)
    }
})


module.exports = router