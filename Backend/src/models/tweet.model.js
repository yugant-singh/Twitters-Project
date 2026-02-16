const mongoose = require("mongoose")

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "content must be required "],
        default: ""
    },
    imgUrl: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "User id must be required"]
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]

}, { timestamps: true })

const tweetModel = mongoose.model("tweets", tweetSchema)
module.exports = tweetModel