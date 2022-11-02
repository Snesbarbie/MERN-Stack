const express = require('express')
require('dotenv').config()

const app = express()
const workoutRoutes = require('./routes/workouts')

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)

app.listen(process.env.PORT, () =>{
    console.log("Listening to " + process.env.PORT)})