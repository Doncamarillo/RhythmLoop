const mongoose = require ('mongoose')
const {schema} = require ('mongoose')

const Song = new Schema (
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        genre: { type: String },
        songFile: { type: String, required: true },
        uploadDate: { type: Date, default: Date.now },
        //mongoosejs.com for upload date
        // "searched mongoose model schema data type for date"

    },
    {timestamps:true}
)

module.exports = mongoose.model ('songs',Song)