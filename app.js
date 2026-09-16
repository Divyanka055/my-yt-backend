require('dotenv').config()
const express = require('express')
const app = express()
const fileUpload = require ('express-fileupload')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const userRouter = require('./routes/user')
const videoRouter = require('./routes/video')
const commentRouter = require('./routes/comment')
const cors = require('cors')



connectDB();

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())

app.use('/user',userRouter)
app.use('/video',videoRouter)
app.use('/comment',commentRouter)

module.exports = app;