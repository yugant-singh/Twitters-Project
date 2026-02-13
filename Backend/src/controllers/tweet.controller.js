const tweetModel = require("../models/tweet.model")
const Imagekit = require("imagekit")
const jwt = require("jsonwebtoken")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT_KEY
})

async function createTweetController(req, res) {
    const file = req.file
    const result = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
        folder:"Twitter/tweets"

    })

    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"token not provided! unauthorized access"
        })
    }
    let decode = null
try{
  decode = jwt.verify(token,process.env.JWT_SECRET)
} catch(err){
    return res.status(401).json({
        message:"token invalid ! unauthorized access"
    })
}

    const tweet = await tweetModel.create({
        content:req.body.content,
        imgUrl:result.url,
        user:decode.id
    })

    res.status(201).json({
        message:"tweet create successfully",
        tweet
    })

}

module.exports = {
    createTweetController
}