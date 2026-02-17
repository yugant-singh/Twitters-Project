const express = require("express")
const followRouter = express.Router()
const identifyUser = require("../middlewares/auth.middleware")
const followController = require("../controllers/follow.controller")
followRouter.post("/:userId",identifyUser,followController.getFollowController) // follow api

followRouter.delete("/:userId",identifyUser,followController.unfollowController)


module.exports = followRouter