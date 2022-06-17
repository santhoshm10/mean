const express = require('express'); 
const router = express.Router();
const User = require('./usermodel'); 
router.post('/',(req,res,next)=>{
    const signUpData = req.body;
    const signup = new User(signUpData); 
    signup.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(err);
        }
    });
});
module.exports = router;