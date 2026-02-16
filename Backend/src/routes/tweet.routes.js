const express = require("express")
const tweetRouter = express.Router()

const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const tweetController = require("../controllers/tweet.controller")


tweetRouter.post("/",upload.single("image"),tweetController.createTweetController) //create
tweetRouter.get("/",tweetController.getAllTweetController)                        //fetch
tweetRouter.get("/:tweetId",tweetController.getTweetByIdController)              //fetch by id
tweetRouter.delete("/:tweetId",tweetController.deleteTweetController)           // delete
tweetRouter.post("/:tweetId/like",tweetController.likeTweetController)         //like
tweetRouter.post("/:tweetId/unlike",tweetController.unLikeTweetController)    // unlike
module.exports = tweetRouter