const express = require('express');
const {httpCreateUser, httpLogin, httpGoogleSignIn} = require("./user.controller")

const userRouter = express.Router()

userRouter.post("/register", httpCreateUser)
userRouter.post("/login", httpLogin)
userRouter.post("/gsign", httpGoogleSignIn)

module.exports = userRouter

