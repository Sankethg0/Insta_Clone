const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')


router.post('/signup',(req,res)=>{
   const {name,email,password} = req.body
   if(!name || !email || !password){
    return res.status(422).json({error:"please add all the fields"})                    //Checking if all the feilds are given
   }
   User.findOne({email:email})                                                          //Checking If the email is already used
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})      
      }
      bcrypt.hash(password,12)                                                           //Hashing the password for security
      .then(hashedpassword=>{
            const user = new User({                                                      //Saving new user data
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"User Saved Successfully"})
            })
            .catch(err=>{
                console.log(err);
            })
        })             
      
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(422).json({
            error:"Provide the required credentials"
        })
    }
    User.findOne({
        email:email
    }).then(
        savedUser=>{
            if(!savedUser){
                return res.status(422).json({
                    error:"Invalid Email or Password!"
                })
            }
            bcrypt.compare(password,savedUser.password)
            .then(doMatch=>{
                if(doMatch){
                    // res.json({
                    //     messsage:"Successfully Signed In"
                    // })
                    const token = jwt.sign({_id:savedUser._id},JWT_SECRET)                          //Creating a token for the authenticated user
                    const {_id,name,email} = savedUser;
                    res.json({token,user:{_id,name,email}})  
                }else{
                    res.status(422).json({
                        error:"Invalid Email or Password"
                    })
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    )
})

module.exports = router;