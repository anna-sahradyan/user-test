const User = require("../models/User");
//?Create User

const createUser = async (req, res) => {
    const {email, phone} = req.body;
    if (!email || !phone) {
        return res.status(422).json({error: "Plz filled the properly"})
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(422).json({ error: "Please provide a valid email" });
    }
    try {
        const userExist = await User.findOne({email: email});
        if (userExist) {
            return res.status(422).json({error: "Email already exist"})
        }
        const newUser = new User({...req.body,createdAt: new Date().toISOString()})
        await newUser.save();
        res.status(201).json({message: "user created successfully"});

    } catch (err) {
        res.status(500).json({error: "Filed to registered"})
    }
}


//?GetAllUsers
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
//?getUser
const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json(`NO user with id ${id}`)
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
//?Delete
const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            res.status(404).json(`NO user with id ${id}`);
        }
        res.status(200).send("User deleted");

    } catch (err) {
        res.status(500).json({message: err.message})
    }
};
//?Updated
const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate({_id: id},
            req.body,
            {new: true, runValidators: true,});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message})
    }

}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser

}