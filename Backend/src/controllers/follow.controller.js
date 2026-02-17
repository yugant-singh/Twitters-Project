const followModel = require("../models/follow.model")

async function getFollowController(req, res) {

    try {
        const followerId = req.user.id
        const followingId = req.params.userId

        if (followerId === followingId) {
            return res.status(400).json({
                message: "You can not follow your account"
            })
        }

        const isAlreadyFollow = await followModel.findOne({
            follower: followerId,
            following: followingId
        })

        if (isAlreadyFollow) {
            return res.status(400).json({
                message: "you already follow this account"
            })
        }
        const follow = await followModel.create({
            follower: followerId,
            following: followingId
        })

        res.status(201).json({
            message: "Follow created successfully",
            follow
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
}

async function unfollowController(req, res) {
    try {
        const followerId = req.user.id
        const followingId = req.params.userId

        if (followerId === followingId) {
            return res.status(400).json({
                message: "you can not unfollow your account"
            })
        }

        const follow = await followModel.findOne({
            follower: followerId,
            following: followingId
        })

        if (!follow) {
            return res.status(404).json({
                message: "Not Following"
            })
        }

        await followModel.findByIdAndDelete(follow._id)

        res.status(200).json({
            message: "this account unfollowed successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
}

module.exports = {
    getFollowController,
    unfollowController
}