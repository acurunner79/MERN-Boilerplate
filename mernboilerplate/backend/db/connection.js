//****************** */
// Dependencies
//****************** */

require('dotenv').config()
const mongoose = require("mongoose")

//////////////////////////

////////////////////////
const {MONGODBURI = "mongodb://localhost:27017/database"} = process.env
const config = {useUnifiedTopology: true, useNewUrlParse: true}
const DB = mongoose.connection

mongoose.connect(MONGODBURI, config)

//////////////////////
//
//////////////////////
DB.on("open", () => console.log("You are now connected to mongo"))
DB.on("close", () => console.log("The mongo connection is closed"))
DB.on("error", (err) => console.log("ERROR:", err))

module.exports = mongoose