const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fantasy',{ useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify:false },(err) => {
    if(!err){
        console.log("Database Connected");
        }
        else{
        console.log("Error in connecting Database ",+err);
        }
        })
        module.exports = mongoose;