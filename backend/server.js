const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const port = process.env.PORT || 3000

connectDB();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
// if we hit api/goals then it is going to look into the following folder for the file
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
