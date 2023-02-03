const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")


router.get('/allpost',(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")                                                           //Get id and the name
    .then(posts=>{
        res.json({posts});
    })
    .catch(err=>{
        console.log(err);
    })
})
router.post('/createpost',requireLogin,(req,res)=>{                                    //Routes to create the post
    const {title,body} = req.body
    if(!body || !title){
        return res.status(422).json({
            "error":"Please complete all the fields"
        })
    }
    
    req.user.password = undefined;                                                     //To neglect the password getting cahnged along with the mongodb

    const post = new Post({
        title,
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err =>{
        console.log(err);
    })
})

router.get('/mypost',requireLogin,(req,res)=>{                                        //To find the post created by the specific user
    Post.find({postedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;