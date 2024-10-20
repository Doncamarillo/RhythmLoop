const mongoose = require ('mongoose')
const {schema} = require ('mongoose')

const Playlist = new Schema (
    {  
    userId: { type: Schema.Types.ObjectId, ref: 'account', required: true },
    name: { type: String, required: true },
    description: { type: String },
    dateCreated: { type: Date, default: Date.now },
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],

    },
    {timestamps:true}
)

module.exports = mongoose.model('playlists', Playlist)