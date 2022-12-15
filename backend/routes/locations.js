const express = require('express')
const {
  crudAll,
  crudOne,
  crudPost,
  crudUpdate,
  crudDelete
} = require('../controllers/locationController')

const router = express.Router()

// GET all
router.get('/', crudAll)

// GET a single
router.get('/:id', crudOne)

// POST
router.post('/', crudPost)

// DELETE
router.delete('/:id', crudDelete)

// UPDATE
router.patch('/:id', crudUpdate)

module.exports = router