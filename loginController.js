const express = require('express'); 
const router = express.Router();
const User = require('./usermodel'); 
router.post('/',(req,res,next)=>{
const username = req.body.username; 
const password = req.body.password;
User.findOne({username:username},(err,doc)=>{ 
        if(err){
            console.log(err);
        }
        else if(!doc){
            res.status(401).send('Invalid Username');
        }
        else if(password !== doc.password){ 
            res.status(401).send('Invalid Password');
        }
        else{
            res.status(200).send('Login Successfully');
        }
    })
});
module.exports = router;