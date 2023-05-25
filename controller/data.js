
const User = require('../model/user.js');


const addUser = async (request, response) => {
    let newUser;
    try{
    const user = request.body;
    user.map(async (u)=>{
        console.log(u)
        
        newUser = new User(u);
       await newUser.save();
   })
        response.status(201).json({success:true, message:"Data added Successfully", data:newUser});
        console.log()

    } catch (error){
        response.status(409).json({ message: error.message });     
    }
}

module.exports = addUser;