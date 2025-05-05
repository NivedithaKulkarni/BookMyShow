const express = require('express')
const router = express.Router()
const User = require("../models/usermodel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authmiddleware = require('../middleware/authmiddleware')

router.post("/register", async (req, res) => {
    try {
      // check if the user already exists
      const userExists = await User.findOne({ email: req.body.email });
      if (userExists) {
        res.send({
          success: false,
          message: "The user already exists!",
        });
      }
  
      // hashing and salting
      //const password = req.body.password
      //console.log(password)
      const salt = await bcrypt.genSalt(10)
     //console.log(salt)
      const hashedpasword = bcrypt.hashSync(req.body.password,salt)
      //console.log(hashedpasword)
      req.body.password = hashedpasword
     // if not create the user according to the User Model
      const newUser = await User(req.body);
      await newUser.save();
  
      res.send({
        success: true,
        message: "User Registered Successfully",
      });
    } catch (err) {
      console.log(err);
    }
  });

  router.post("/login",async(req,res)=>{
    try {
      const user = await User.findOne({ email: req.body.email }); 

      if (!user) {
        res.send({
          success: false,
          message: "Please Register! User not found!",
        });
      }

      //validate password
      const validpassword = await bcrypt.compare(req.body.password,user.password)
      if(!validpassword){
        res.send({
          success: false,
          message: "Sorry! Invalid Password",
        });
      }
      const jwtToken = jwt.sign({ userId: user._id }, "scaler_movies", {
        expiresIn: "2d",
      });
      res.send({
        success: true,
        message: "You've successfully logged in!",
        token:jwtToken,
      });
    } catch (error) {
      console.error(error)
    }
  })

  router.get('/get-valid-user',authmiddleware, async (req,res)=>{
    const validUser = await User.findById(req.body.userId).select("-password");//-password neglect password

    res.send({
      success: true,
      message: "You are authorized to go to the protected route!",
      data: validUser,
    });
  })
  module.exports = router;