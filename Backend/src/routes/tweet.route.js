const express = require("express")
const tweetRouter = express.Router()
const identifyUser = require("../middlewares/auth.middleware")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const tweetController = require("../controllers/tweet.controller")


tweetRouter.post("/",upload.single("image"),identifyUser,tweetController.createTweetController) //create
tweetRouter.get("/",tweetController.getAllTweetController)                        //fetch
tweetRouter.get("/:tweetId",tweetController.getTweetByIdController)              //fetch by id
tweetRouter.delete("/:tweetId",identifyUser,tweetController.deleteTweetController)           // delete
tweetRouter.post("/:tweetId/like",identifyUser,tweetController.likeTweetController)         //like
tweetRouter.post("/:tweetId/unlike",identifyUser,tweetController.unLikeTweetController)    // unlike
module.exports = tweetRouter