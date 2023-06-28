const utils = require('../utils');

const signupController = async (req,res)=>{
    const {username,password,group} = req.body;
    newUserData = {
        username:username,
        password:utils.hashPassword(password),
        group:group,
    }
    utils.adduser(newUserData)
    .then(result =>{
        result?
        res.status(201).json({message:"SUCCESS",data:newUserData})
        :res.status(400).json({message:"FAILURE"});
    })
}


module.exports = signupController