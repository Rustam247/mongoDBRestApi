const User = require("./userModel")
const jwt = require("jsonwebtoken")

// Thunder - POST
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET)
        res.status(201).send({user: newUser, token}); // or "User has been created"
    } catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}
// {"username: "John", "email": "sdasd@dsadas.com", "Password": "sadasdasda"}

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
exports.patchUser = async (req, res) =>{
    try {
        const userUpdate = await User.updateOne(req.body)
        if (req.body.name){
            post.name = req.body.name
        }
        res.status(200).send({user: userUpdate})
    } catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

/// or Put 
exports.updateUser = async (req, res) =>{
    try{
        await User.updateOne(
            {username: req.body.username},
            {[req.body.key]: req.body.value}
        )
        res.status(200).send({massage: "successfully update a user"})
    } catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}
// {name: "Alex", key: "email", value: "NEW EMAIL"}

// delete - delet
exports.deleteUser = async (req, res) => {
    try {
        // const userDelete = await User.deleteOne(req.body);
        await User.deleteOne({username: req.params.username})
        // http://localhost:5001/deleteUser/Alex will delete Alex from DB
        res.status(200).send({massage: "Succsess"})
    } catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

// // simple login
// exports.loginUser = async (req, res) =>{
//     try {
//         const user = await User.findByCredentials(req.body.username, req.body.password)
//         res.status(200).send({user: user.username})
//     } catch (error){
//         console.log(error)
//         res.status(500).send({error: error.message})
//     }
// }

// login with token, This token should iclude unique imnformation from the DB. 
// The Token needs to sent back in the response and have an endpoint that will gives us token
exports.loginUser = async (req, res) =>{
    try {
        // const user = await User.findByCredentials(req.body.username, req.body.password)

        const token = await jwt.sign({_id: req.user._id}, process.env.SECRET)
        res.status(200).send({user: req.user.username, token, text: "Successfully loggen in"})
    } catch (error){
        console.log(error)
        res.status(500).send({error: error.message})
    }
}