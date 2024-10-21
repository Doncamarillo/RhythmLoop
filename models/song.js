const {Schema} = require('mongoose')

const songSchema = new Schema (
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        album: {type: String, required:true},
        genre: { type: String },
        uploadDate: { type: Date, default: Date.now },
        explicit: {type: Boolean, required:true},
        songFile: { type: String, required: false },
        albumArt: {type: String, required: false},
        //mongoosejs.com for upload date
        // "searched mongoose model schema data type for date"

    },
    {timestamps:true}
)

module.exports = songSchema;