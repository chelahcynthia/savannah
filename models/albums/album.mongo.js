const mongoose = require("mongoose")

const albumSchema = mongoose.Schema({
    title:{
        type: String,
        requred: true
    },
    user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("Album", albumSchema)