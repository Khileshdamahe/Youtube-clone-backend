const User = require('../Modals/user');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    try {
        const { channelName, userName, about, profilePic, password } = req.body;
        const isExist = await User.findOne({ userName });
        if (isExist) {
            res.status(400).json({ error: "Username Already Exist Please try with other username" });
        } else {
            let updatedPass = await bcrypt.hash(password, 10);
            const user = new User({ channelName, userName, about, profilePic, password: updatedPass });
            await user.save();
            res.status(201).json({ message: 'User registered successfully', success: "yes", data: user })
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

exports.signIn = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        if (user && await bcrypt.compare(password,user.password)) {
            res.json({ message: 'Logged in successfully', success: "true" });
        } else {
            res.status(400).json({ error: 'Invalid credential' });
        }
    } catch (errorMsg) {
        res.status(500).json({ error: 'Server error' });
    }
}