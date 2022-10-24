const { Router } = require("express")
const { createUser, readUser } = require("./userControllers")

const userRouter = Router()

userRouter.get("/readUser", readUser);
userRouter.post("/createUser", createUser);
// patch
// delete

module.exports = userRouter