const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json({msg: "Get all stuff"})
})

router.get('/:id', (req, res)=>{
    res.json({msg: "Get one thing"})
})

router.post('/',(req, res)=>{
    res.json({msg: "Post"})
})

router.delete('/:id',(req, res)=>{
    res.json({msg: "Delete"})
})

router.patch('/:id',(req, res)=>{
    res.json({msg: "Update"})
})

module.exports = router
