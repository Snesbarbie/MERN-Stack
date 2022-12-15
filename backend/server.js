require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const locationRoutes = require('./routes/locations')
const artistRoutes = require('./routes/artists')

const app = express()

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/locations',locationRoutes)
app.use('/api/artists',artistRoutes)


mongoose.connect(process.env.MONGO_URI) // db connect
    .then(() => {
        console.log('connected to database')
        app.listen(process.env.PORT, () =>{
            console.log("On DB and listening to " + process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
