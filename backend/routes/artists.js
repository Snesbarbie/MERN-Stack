const express = require('express')
const {
  crudAll,
  crudDayOne,
  crudOne,
  crudPost,
  crudUpdate,
  crudDelete
} = require('../controllers/artistController')

const router = express.Router()

// GET all
router.get('/', crudAll)

// GET day 1
router.get('/day/1', crudDayOne)

// GET a single
router.get('/:id', crudOne)

// POST
router.post('/', crudPost)

// DELETE
router.delete('/:id', crudDelete)

// UPDATE
router.patch('/:id', crudUpdate)

module.exports = router