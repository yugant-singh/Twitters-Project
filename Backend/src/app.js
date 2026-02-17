const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const authRouter  = require("./routes/auth.route")
const tweetRouter = require("./routes/tweet.route")
const followRouter= require("./routes/follow.route")
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)   //prefix for auth route
app.use("/api/tweets",tweetRouter) //prefix for tweets route
app.use("/api/follow",followRouter) // prefix for follow route

module.exports = app