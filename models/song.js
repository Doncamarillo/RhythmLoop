const {Schema} = require('mongoose');
const  mongoose = require('mongoose');

const Song = new Schema (
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        album: {type: String, required:true},
        genre: { type: String },
        uploadDate: { type: Date, default: Date.now, required:false },
        explicit: {type: Boolean, required:true},
        songFile: { type: String, required: false },
        albumArt: {type: String, required: false},
        producer:{type:String, required: false},
        writer: {type: String, required: false}
        //mongoosejs.com for upload date
        // "searched mongoose model schema data type for date"

    },
    {timestamps:true}
)

module.exports = Song;