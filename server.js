const express    = require('express')
const path       = require('path')
const app        = express()
const PORT       = process.env.PORT || 8000
const User = require('./models/Users')

//middleware
const bodyParser = require('body-parser');
const multer       = require('multer');
// const upload = multer({storage: storage})
// .single('file');

app.use(bodyParser.json());


//database
require('./config/db')

//controllers
const userController = require('./controllers/users')

app.use('/auth', userController)

const uploadsController = require('./controllers/uploads')

app.use('/uploads', uploadsController)



// app.use(express.static(path.join(__dirname,'build')))
app.use(express.json())

//homepage
app.get('/', (req,res)=>{
    res.send('COMING IN HOT')
})

app.listen(PORT, ()=>{
    console.log(`...Listening on port ${PORT}`)
})