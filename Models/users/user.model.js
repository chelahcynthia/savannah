const User = require("./user.mongo.js")


async function getUser(userDetails){
    try {
        const user = await User.find(userDetails)
    }catch(err){
        console.log(err)
        return false
    }
}

async function createUser(userDetails){
    try{
        const user = await User.create(userDetails)
    }catch(err){
        return err
    }
}

module.exports = {
    getUser,
    createUser
}