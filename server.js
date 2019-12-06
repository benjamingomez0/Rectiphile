const express    = require('express')
const app        = express()
const PORT       = process.env.PORT || 8000
const bodyParser = require('body-parser');



app.listen(PORT, ()=>{
    console.log(`...Listening on port ${PORT}`)
})