const express = require("express")
const tweetRouter = express.Router()

const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const tweetController = require("../controllers/tweet.controller")
tweetRouter.post("/",upload.single("image"),tweetController.createTweetController)
module.exports = tweetRouter