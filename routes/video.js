const express = require('express')
const Router = express.Router()
const { upload,like,unlike,videoById,allVideo,videosByChannelId,deleteVideo } = require('../controller/videoController')

Router.post('/upload',upload)
Router.put('/like/:videoId',like)
Router.put('/dislike/:videoId',unlike)
Router.get('/allvideo',allVideo)
Router.get('/:videoId',videoById)
Router.get('/allvideo/channelId',videosByChannelId)
Router.delete('/:videoId',deleteVideo)

module.exports = Router;