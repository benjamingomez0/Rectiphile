const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const Master = require('../models/Masters')

//User HomePage
router.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

//user Registration
router.post('/users/new', async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.json(createdUser)
    } catch (err) {
        console.log(err)
    }
});

router.get('/users/:id', async(req,res)=>{
    try
    {
        const foundMasterDocs = await Master.find({userLeader:req.params.id}, (err,foundMasters)=>{
            if(err)
            {
                console.log(err)
            }
            else
            {
                res.json(foundMasters)
            }
        })
    }
    catch(err)
    {
        console.log(err)
    } 

})










//user Edit
router.put('/users/:userId', async (req, res) => {
   console.log(req.body)
   const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new:true})
   res.json(updatedUser)
});

//user delete
router.delete('/users/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

module.exports = router