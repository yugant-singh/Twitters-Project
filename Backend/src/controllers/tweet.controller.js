const tweetModel = require("../models/tweet.model")
const Imagekit = require("imagekit")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT_KEY
})

async function createTweetController(req, res) {
    const file = req.file
    const result = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname
    })


}

module.exports = {
    createTweetController
}