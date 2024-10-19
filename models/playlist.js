const mongoose = require ('mongoose')
const {schema} = require ('mongoose')

const Playlist = new Schema (
    {

    },
    {timestamps:true}
)

module.exports = mongoose.model('playlists', Playlist)