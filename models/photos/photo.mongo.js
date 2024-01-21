const mongoose = require("mongoose")

const photoSchema = mongoose.Schema({
    title: {
        require: true,
        type: String
    },
    url: {
        require: true,
        type: String
    },
    album: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album"
    }]
})


module.exports = mongoose.model("Photo", photoSchema)