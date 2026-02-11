const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "username is already exist"],
        required: [true, "username is required"],
    },
    email: {
        type: String,
        unique: [true, "email is already exist"],
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    bio: String,
    profile_url: {
        type: String,
        default: "https://ik.imagekit.io/xyjgsas1o/default.png?updatedAt=1770787503341"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel