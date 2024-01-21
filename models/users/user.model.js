const User = require("./user.mongo.js")


async function getUser(userDetails){
    try {
        const user = await User.find(userDetails)
        return user[0]
    }catch(err){
        console.log(err)
        return err
    }
}

async function createUser(userDetails){
    try{
        const user = await User.create(userDetails)
        return user
    }catch(err){
        return err
    }
}

module.exports = {
    getUser,
    createUser
}