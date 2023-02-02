const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("hello");
})

router.post('/signup',(req,res)=>{
   const {name,email,password} = req.body
   if(!name || !email || !password){
    res.json({error:"please add all the feilds!"})
   }
   res.json({message:"Successfully Posted"})
})

module.exports = router;