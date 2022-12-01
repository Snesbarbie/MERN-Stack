const mongoose = require('mongoose')
const crudModel = require('../models/crudModel')

// Get All
const crudAll = async (req, res) => {

    const crudModels = await crudModel.find({}).sort({createdAt: -1})

    res.status(200).json(crudModels)

    }
// Get using ID
const crudOne = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such data'})
      }

    const crudModels = await crudModel.findById(id)

    if (!crudModels) {
        return res.status(404).json({error: 'No such data'})
      }

    res.status(200).json(crudModels)

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
    const crudModels = await crudModel.create({title, day, address})
    res.status(200).json(crudModels)
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
  
    const crudModels = await crudModel.findOneAndDelete({_id: id})
  
    if(!crudModels) {
      return res.status(400).json({error: 'No such data'})
    }
  
    res.status(200).json(crudModels)
}

// Update using ID
const crudUpdate = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such data'})
    }
  
    const crudModels = await crudModel.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!crudModels) {
      return res.status(400).json({error: 'No such data'})
    }
  
    res.status(200).json(crudModels)
  }

  module.exports = {
    crudAll,
    crudOne,
    crudPost,
    crudUpdate,
    crudDelete
  }