const mongoose = require('mongoose')
const locationModel = require('../models/locationModel')

// Get All
const crudAll = async (req, res) => {

    const locationModels = await locationModel.find({}).sort({createdAt: -1})

    res.status(200).json(locationModels)

    }
// Get using ID
const crudOne = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such data'})
      }

    const locationModels = await locationModel.findById(id)

    if (!locationModels) {
        return res.status(404).json({error: 'No such data'})
      }

    res.status(200).json(locationModels)

    }
// Post
const crudPost = async (req, res) => {
    const {title, day, address} = req.body

    let emptyFields = []

    if (!title) {
      emptyFields.push('title')
    }
    if (!day) {
      emptyFields.push('day')
    }
    if (!address) {
      emptyFields.push('address')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // Add to db
try {
    const locationModels = await locationModel.create({title, day, address})
    res.status(200).json(locationModels)
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
  
    const locationModels = await locationModel.findOneAndDelete({_id: id})
  
    if(!locationModels) {
      return res.status(400).json({error: 'No such data'})
    }
  
    res.status(200).json(locationModels)
}

// Update using ID
const crudUpdate = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such data'})
    }
  
    const locationModels = await locationModel.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!locationModels) {
      return res.status(400).json({error: 'No such data'})
    }
  
    res.status(200).json(locationModels)
  }

  module.exports = {
    crudAll,
    crudOne,
    crudPost,
    crudUpdate,
    crudDelete
  }