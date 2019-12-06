const express = require('express')

const router = express.Router()
const User = require('../models/Users')

router.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
});
router.post('/users', async (req, res) => {
    try
    {
        const createdUser = await User.create(req.body)
        res.json(createdUser)
    }
    catch(err)
    {
        console.log(err)
    }
});
router.put('/users/:userId', async (req, res) => {
   console.log(req.body)
   const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new:true})
   res.json(updatedUser)
});
router.delete('/users/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});
module.exports = router