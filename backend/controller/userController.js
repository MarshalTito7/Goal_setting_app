const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asynchandler =  require('express-async-handler')
const User = require('../model/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public

const registerUser = asynchandler( async(req,res) => {

    const{ name, email, password } = req.body
    // destructuring the body data

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if the user exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Now we are gonna hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)


    // create user
    const user = await User.create(
        {
            name,
            email,
            password: hashedPassword
        }
    )

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid User Data')
    }

})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public

const loginUser = asynchandler(async (req,res) => {
    res.json({
        message : 'Login User'
    })
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public

const getMe = asynchandler(async(req,res) => {
    res.json({
        message : 'User data display'
    })
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}