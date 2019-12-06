const express    = require('express')
const path       = require('path')
const app        = express()
const PORT       = process.env.PORT || 8000
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'build')))
app.use(express.json())
// app.use('/auth', userController)


app.get('/hello', (req,res)=>{
    res.json({ message: 'world'})
})

app.listen(PORT, ()=>{
    console.log(`...Listening on port ${PORT}`)
})