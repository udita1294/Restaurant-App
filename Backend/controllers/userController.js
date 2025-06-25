const foodModel = require('../models/userModel.js');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require('validator');
const userModel = require('../models/userModel.js');


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// LOGIN USER

const loginUser = async(req,res)=>{
    const {name,email} = req.body;
    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({
                success:false,
                message : "User doesn't exists"
            })

            const isMatch = bcrypt.compare(password,user.password);

            if (!isMatch) {
                return res.json({
                    success : false,
                    message : "Invalid credentials"
                })

                const token = createToken(user._id)
                res.json({
                    success : true,
                    token
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.json({
            success : false,
            message : "Error"
        })
    }
}

// REGISTER USER
const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        // CHECKING IF A USER HAS ALREADY REGISTED
        const exists = await userModel.findOne({email});
        if (exists) {
            res.json({
                success : false,
                message : "User already exists"
            })
        }
        // VALDIDATING EMAIL FORMAT & STRONG PASSWORD
        if (!validator.isEmail(email)) {
            return res.json({
                success : false,
                message : "Please enter a valid email"
            })
        }

        if (password.length<8) {
            return res.json({
                success : false,
                message : "Please enter a strong password"
            })
        }

        // HASING(ENCRYPTING) USER PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save(); // THE USER WILL BE SAVED IN DATABASE

        const token = createToken(user._id);
        res.json({
            success : true,
            token
        })

    } catch (error) {
        console.log(error);
        res.json({
            success : false,
            message : "Error"
        })
    }
}

module.exports = {
    loginUser : loginUser ,
    registerUser : registerUser,
}