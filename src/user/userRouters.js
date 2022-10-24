const { Router } = require("express")
const { createUser, readUser, deleteUser, patchUser } = require("./userControllers")

const userRouter = Router()

userRouter.get("/readUser", readUser);
userRouter.post("/createUser", createUser);
// patch

userRouter.patch("/patchUser", patchUser);

// delete
userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter