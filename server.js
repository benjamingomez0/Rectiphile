const express    = require('express')
const path       = require('path')
const app        = express()
const PORT       = process.env.PORT || 8000
const bodyParser = require('body-parser');
const userController = require('./controllers/users')
require('./config/db')
app.use(express.static(path.join(__dirname,'build')))
app.use(express.json())

app.use('/auth', userController)


app.get('/', (req,res)=>{
    res.send('COMING IN HOT')
})






app.listen(PORT, ()=>{
    console.log(`...Listening on port ${PORT}`)
})