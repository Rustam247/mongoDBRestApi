const User = require("./userModel")

// Thunder - POST
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).send({user: newUser}) // or "User has been created"
    } catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

//req if you send something - res if you take back something from DB - thunder - GET
exports.readUser = async (req, res) => {
    try{
        const users = await User.find({}) // empty will show all docs in Data base
        res.status(200).send({user: users}) // all users
    } catch(error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

// update - patch

// delete - delet