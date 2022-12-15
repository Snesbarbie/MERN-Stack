const mongoose = require('mongoose')

const Schema = mongoose.Schema

const locationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
},{ timestamps: true })

module.exports = mongoose.model('locationModel', locationSchema)