const express = require('express')
const app = express()
const port = 3000
const router = require('./server/routes/')
var bodyParser = require('body-parser')
 
app.use(bodyParser.urlencoded({ extended: true }))
 
app.use(bodyParser.json())

app.use(express.static('public'))
app.use(router);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

