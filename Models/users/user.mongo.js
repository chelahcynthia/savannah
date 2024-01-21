const mongoose = require("moongose")

const userSchema = mongoose.Schema({
    username: {
        required: true,
        unique: true
    },
    name: {
        require: true
    },
    email:{
        require: true,
        unique: true
    },
    password: {
        require: true
    }
})

module.exports = mongoose.model("User", userSchema)