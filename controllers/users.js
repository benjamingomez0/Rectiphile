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

//login
router.get('/users/login/:id', async (req,res)=>{
   const foundUser = await User.findById(req.params.id, (err,user)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            if(user)
            {
                const data = {
                    message:"success"
                }
                res.json(data)
            }
        }

   })
})



//user delete
router.delete('/users/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

module.exports = router