const tweetModel = require("../models/tweet.model")
const Imagekit = require("imagekit")
const jwt = require("jsonwebtoken")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT_KEY
})

async function createTweetController(req, res) {             //post method
    try {
        const file = req.file
        const result = await imagekit.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: "Twitter/tweets"

        })

       

        const tweet = await tweetModel.create({
            content: req.body.content,
            imgUrl: result.url,
            user: req.user.id
        })

        res.status(201).json({
            message: "tweet create successfully",
            tweet
        })
    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }

}

async function getAllTweetController(req, res) {             //get method

    try {
        const tweets = await tweetModel
            .find()
            .populate("user", "username email bio profile_url")
            .sort({ createdAt: -1 })  
            .limit(50); 
        res.status(200).json({
            message: "all tweets fetched successfully",
            tweets
        })

    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
}

async function getTweetByIdController(req, res) {            //get By id method
    try {
        const id = req.params.tweetId
        const tweet = await tweetModel
            .findById(id)
            .populate("user", "username  bio profile_url")
        if (!tweet) {
            return res.status(404).json({
                message: "tweet not found"
            })
        }
        res.status(200).json({
            message: "Tweet fetched successfully",
            tweet
        })

    } catch (err) {
        res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }


} 

async function deleteTweetController(req, res) {             //delete method
    try {

        
       
        const userId = req.user.id
        const tweetId = req.params.tweetId
        const tweet = await tweetModel.findById(tweetId)
        if (!tweet) {
            return res.status(404).json({
                message: "Tweet not found"
            })
        }
        const isUserValid = tweet.user.toString() === userId

        if (!isUserValid) {
            return res.status(403).json({
                message: "You can delete only your tweet"
            })
        }
        await tweetModel.findByIdAndDelete(tweetId)
        res.status(200).json({
            message: "Tweet Deleted successfuly"
        })

    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
}
async function likeTweetController(req,res){               // like method
try{
 
    const userId = req.user.id
    const tweetId = req.params.tweetId
    const tweet = await tweetModel.findById(tweetId)
    if(!tweet){
        return res.status(404).json({
            message:"Tweet not found"
        })
    }

    if(tweet.likes.includes(userId)){
        return res.status(400).json({
            message:"user already liked this tweet"
        })
    }
    tweet.likes.push(userId)
    await tweet.save()
    res.status(200).json({
        message:"Tweet liked successfully",
        likesCount:tweet.likes.length
    })


} 

catch(err){
    return res.status(500).json({
        message:"Server Error",
        error:err.message
    })
}

}

async function unLikeTweetController(req,res){           // unlike method
   try{
   

const userId = req.user.id
const tweetId = req.params.tweetId
const tweet = await tweetModel.findById(tweetId)
if(!tweet){
    return res.status(404).json({
        message:"tweet not found"
    })
}
if(!tweet.likes.includes(userId)){
    return res.status(400).json({
        message:"you can not unlike this tweet"
    })
}

tweet.likes = tweet.likes.filter(likeId=>likeId.toString()!==userId)
await tweet.save()
res.status(200).json({
    message:"tweet unlike successfully",
    likesCount:tweet.likes.length
})




   } 

   catch(err){
    return res.status(500).json({
        message:"Server Error",
        error:err.message
    })
   }

}

module.exports = {
    createTweetController,
    getAllTweetController,
    getTweetByIdController,
    deleteTweetController,
    likeTweetController,
    unLikeTweetController
}