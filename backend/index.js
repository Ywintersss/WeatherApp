//import express modules
import express from 'express'

//import database connection
import DB from'./config/database.js' 

//import test data
import test from './test.json' assert {type: 'json'}

//create express app
const app = express()

//set port to 5000 if not specified
const PORT = process.env.PORT || 5000;

//default route
app.get('/', (req, res) => {
    res.send("Hello World!")
})

//test route
app.get('/test', (req, res) => {
    console.log("Sending test data", test);
    res.json(test)
})

//start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))