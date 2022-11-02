const express = require('express')

const app = express()

const host = "localhost"
const port = 8800

app.listen(port, () =>{console.log("Listening to " + port)})