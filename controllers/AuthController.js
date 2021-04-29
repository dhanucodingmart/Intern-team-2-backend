const User = require('../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const setting = require('../config/settings')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password ,10 , async (err, hashedPwd) => {
        if (err) {
            res.json({
                status: false,
                message: "Error while registering", err
            })
        }

        if (!req.body.name || !req.body.contactNo || !req.body.email || !hashedPwd) {
            res.json({
                status: false,
                message: "Some Fields are unfilled"
            })
        }

        // Creating New User
        let newUser = new User({
            name: req.body.name,
            contactNo: req.body.contactNo,
            email: req.body.email,
            dob: req.body.dob,
            country: req.body.country,
            password: hashedPwd,
            isAdmin: req.body.isAdmin ? true : false
        })
        console.log(req.body.password);

        try {
            let userCheck = await User.findOne({ email: req.body.email });
            let userCheckTwo = await User.findOne({ contactNo: req.body.contactNo });
            if (userCheck || userCheckTwo) {
                res.json({
                    status: false,
                    message: "Email id is already registered"
                })
            } else {
                newUser.save().then(user => {
                    res.json({
                    status: true,
                    message: "User Registered"
                     })
        }).catch(err => {
            res.json({
                status: false,
                message: "Error while registering. Try again", err
            })
        })
            }
        } catch (err) {
            res.json({
                status: false,
                message: "Error while registering. Try again", err
            })
        }
    })
}

const login = (req, res, next) => {
    let password = req.body.password;
    console.log(req.body);

    User.findOne({ contactNo: req.body.username }).then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.json({
                        status: false,
                        error: "Some Mistake in password" + err
                    })
                }
                if (result) {
                    let token = jwt.sign({ id: user._id }, setting.secret, { expiresIn: '24h' });
                    res.json({
                        status: true,
                        message: "logged in",
                        token: token,
                        user: user
                    })
                } else {
                    res.json({
                        status: false,
                        message: "Password Does not match",
                    })
                }
            })
        } else {
            res.json({
                status: false,
                message: "no user found"
            })
        }
    })
}



module.exports ={ register, login };