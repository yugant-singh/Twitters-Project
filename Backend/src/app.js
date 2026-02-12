const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const authRouter  = require("../src/routes/auth.route")
const tweetRouter = require("../src/routes/tweet.routes")
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)   //prefix for ath route
app.use("/api/tweets",tweetRouter)

module.exports = app