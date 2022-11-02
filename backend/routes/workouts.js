const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json({msg: "Get all stuff"})
})

router.get('/:id', (req, res)=>{
    res.json({msg: "Get one thing"})
})

router.post('/', async (req, res)=>{
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch (error){
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id',(req, res)=>{
    res.json({msg: "Delete"})
})

router.patch('/:id',(req, res)=>{
    res.json({msg: "Update"})
})

module.exports = router
