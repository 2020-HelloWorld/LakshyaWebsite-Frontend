const utils = require('../utils');

const createUserController = async (req,res)=>{
    if (await req.session.user) {
        console.log(req.session.user);
        const username = req.session.user.username;
        await utils.getUserGroup(username)
        .then(group=>{
            if (group!=null){
                if (group==="admin"){
                    const {username,password,group} = req.body;
                    newUserData = {
                        username:username,
                        password:password,
                        group:group,
                    }
                    utils.adduser(newUserData)
                    .then(result =>{
                        result?res.status(200).json({message:"SUCCESS",data:newUserData}):res.status(404).json({message:"FAILURE"});
                    })
                }
            } else {
                res.status(401).json({message:"FAILURE"})
            }
        })
      } else {
        res.status(401).json({message:"FAILURE"})
      }
}

module.exports = createUserController