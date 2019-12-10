const express    = require('express')
const path       = require('path')
const formidableMiddleware = require('express-formidable');
const app        = express()
const PORT       = process.env.PORT || 8000
const User = require('./models/Users')

//middleware
const bodyParser = require('body-parser');
const multer       = require('multer');
// const upload = multer({storage: storage})
// .single('file');

// app.use(formidableMiddleware());
app.use(express.json());
// app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
// app.use(bodyParser.urlencoded({ extended: false }));


//database
require('./config/db')

//controllers
const userController = require('./controllers/users')
app.use('/auth', userController)

const uploadsController = require('./controllers/uploads')
app.use('/uploads', uploadsController)

const docsController = require('./controllers/documents')
app.use('/docs',docsController)

// app.post('/hello', (req, res) => console.log(req.body))



// app.use(express.static(path.join(__dirname,'build')))
// app.use(express.json())

//homepage
app.get('/', (req,res)=>{
    res.send('COMING IN HOT')
})

app.listen(PORT, ()=>{
    console.log(`...Listening on port ${PORT}`)
})