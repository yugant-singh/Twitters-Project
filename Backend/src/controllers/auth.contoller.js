const userModel = require("../models/user.model")
const bcrypt  = require("bcrypt")
const jwt = require("jsonwebtoken")

async function registerController(req, res) {
    const { username, email, password, bio, profile_url } = req.body
    const isUserExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserExist) {
        return res.status(409).json({
            message: "user is already registerd with this " + (isUserExist.email == email ? "email" : "username")
        })
    }
 const hash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profile_url
    })

    const token = jwt.sign({
        id: user._id
    },
        process.env.JWT_SECRET, { expiresIn: "1d" }
    )

    res.cookie("token", token)
    res.status(201).json({
        message: "user registered successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profile_url: user.profile_url
        }
    })

}

async function loginController(req, res) {

    const { username, email, password } = req.body
    const user = await userModel.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })

    if (!user) {
        return res.status(409).json({
            message: "user not found"
        })
    }
    const isValidPassowrd = await bcrypt.compare(password,user.password)
    if (!isValidPassowrd) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({
        id: user._id
    },
        process.env.JWT_SECRET, { expiresIn: "1d" }
    )
    res.cookie("token", token)


    res.status(200).json({
        message:"User LoggedIn Successfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profile_url:user.profile_url
        }
    })
}

module.exports = {
    registerController,
    loginController
}