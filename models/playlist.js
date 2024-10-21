const mongoose = require ('mongoose')
const {Schema} = require ('mongoose')

const Playlist = new Schema (
    {  
    name: { type: String, required: true },
    playlistImage: {type: String, required: false},
    description: { type: String, required: false },
    dateCreated: { type: Date, default: Date.now },
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
    accounts: [{ type: Schema.Types.ObjectId, ref: 'Account'}]
    

    },
    {timestamps:true}
)

module.exports = Playlist