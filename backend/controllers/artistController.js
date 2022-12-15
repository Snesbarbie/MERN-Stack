const mongoose = require('mongoose')
const artistModel = require('../models/artistModel')

// Get All
const crudAll = async (req, res) => {

    const artistModels = await artistModel.find({}).sort({createdAt: -1})

    res.status(200).json(artistModels)

    }
// Get using ID
const crudOne = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such data'})
      }

    const artistModels = await artistModel.findById(id)

    if (!artistModels) {
        return res.status(404).json({error: 'No such data'})
      }

    res.status(200).json(artistModels)

    }
// Post
const crudPost = async (req, res) => {
    const {name, day, time, about} = req.body

    let emptyFields = []

    if (!name) {
      emptyFields.push('name')
    }
    if (!day) {
      emptyFields.push('day')
    }
    if (!time) {
      emptyFields.push('time')
    }
    if (!about) {
      emptyFields.push('about')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // Add to db
try {
    const artistModels = await artistModel.create({name, day, time, about})
    res.status(200).json(artistModels)
}catch (error){
    res.status(400).json({error: error.message})
}
}

// Delete using ID

const crudDelete = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such data'})
    }
  
    const artistModels = await artistModel.findOneAndDelete({_id: id})
  
    if(!artistModels) {
      return res.status(400).json({error: 'No such data'})
    }
  
    res.status(200).json(artistModels)
}

// Update using ID
const crudUpdate = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such data'})
    }
  
    const artistModels = await artistModel.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!artistModels) {
      return res.status(400).json({error: 'No such data'})
    }
  
    res.status(200).json(artistModels)
  }

  module.exports = {
    crudAll,
    crudOne,
    crudPost,
    crudUpdate,
    crudDelete
  }