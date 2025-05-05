const mongoose = require('mongoose')

const dbstring = process.env.DB_URL

mongoose.connect(dbstring)
const connection = mongoose.connection

connection.on("connected",()=>{
    console.log("Connection Succesful")
})
connection.on("error",()=>{
    console.log("Connection unsuccesful")
})