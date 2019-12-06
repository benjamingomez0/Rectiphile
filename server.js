const express    = require('express')
const path       = require('path')
const app        = express()
const PORT       = process.env.PORT || 8000
const User = require('./models/Users')

//middleware
const bodyParser = require('body-parser');
var multer = require('multer');
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(express.static('../client'));
app.use(bodyParser.json());

//controllers
const userController = require('./controllers/users')
require('./config/db')
app.use(express.static(path.join(__dirname,'build')))
app.use(express.json())

app.use('/auth', userController)


app.get('/', (req,res)=>{
    res.send('COMING IN HOT')
})

// app.post('/auth/users',async (req,res)=>{
    
//     try {
//         const createdUser = User.create(req.body)
//         res.json(createdUser)
//     } catch (err) {
//         console.log(err)
//     }
// })

app.listen(PORT, ()=>{
    console.log(`...Listening on port ${PORT}`)
})