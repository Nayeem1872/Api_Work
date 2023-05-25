const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {type:String,trim:true}, 

  email: {type:String,trim:true},
 
  mobile: {type:String,trim:true},
 
});

const postUser = mongoose.model("user", userSchema);
module.exports = postUser;
