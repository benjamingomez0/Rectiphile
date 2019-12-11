const express    = require('express');
const app        = express()
const mongoose   = require('mongoose')
const router     = express.Router()
const bodyParser = require('body-parser');

//Model
const Master = require('../models/Masters')
const Version = require('../models/Versions')

router.get('/', async (req,res)=>{
    try
    {
       const foundMasters=  await Master.find({}, (err,master)=>{
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

//master show route
router.get('/masters/:id', async (req,res) =>{
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
router.get('/versions/:id', async (req,res) =>{
    try
    {
       const foundVersion=  await Version.findById(req.params.id, (err,version)=>{
           if(err)
           {
               console.log(err)
           }
           else
           {
               res.json(version)
           }
       })
    }
    catch(err)
    {
        console.log(err)
    }
})

router.delete('/:id', async(req,res)=>{
    try
    {
        const mastertoUpdate = await Master.find({versions:req.params.id})
        const deletedVersion = await Version.findByIdAndRemove(req.params.id)
        const updatedMaster = await mastertoUpdate.update({ versions: versions.filter(version=> version===req.params.id)}
            ,{new:true}
            ,async(err, master)=>{
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