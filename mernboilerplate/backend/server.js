//***************************
//DEPENDENCIES
//***************************
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const mongoose = require('./db/connection')

//***************************
//GLOBAL VARIABLES
//**************************
const {PORT = 4000} = process.env //destructuring env variables

//***************************
//Application Object
//***************************

const app = express()

/////////////////
// Middlewaree
////////////////
app.use(cors()) 
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//////////////////////
// Routes and routers
//////////////////////

app.get('/', (req, res) => {
    res.json({hello: 'World'})
})

//***************************
//Server Listener
//***************************

app.listen(PORT, () => {
    console.log(`you are listening on port ${PORT}`)
})