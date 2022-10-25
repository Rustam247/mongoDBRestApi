const { Router } = require("express")
const { createUser, readUser, deleteUser, patchUser, updateUser, loginUser } = require("./userControllers")
const {hashPass, tokenCheck, comparePass} = require("../middleware") // if its index.js it will pick it auto

const userRouter = Router()

userRouter.get("/readUser", readUser);
userRouter.post("/createUser", hashPass, createUser); // add hashPass
// patch - Update
userRouter.patch("/patchUser", patchUser);
userRouter.put("/updateUser", updateUser);
// delete
// userRouter.delete("/deleteUser", deleteUser); or
userRouter.delete("/deleteUser/:username", deleteUser);

// Login
userRouter.post("/loginUser", comparePass, loginUser)
userRouter.get("/loginUser", tokenCheck, loginUser)

module.exports = userRouter