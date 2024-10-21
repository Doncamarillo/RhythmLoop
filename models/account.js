const mongoose = require ('mongoose')
const { Schema } = require ('mongoose')


const Account = new Schema (
    {
        username: {type: String, required:true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        phoneNumber : {type: Number, required: false},
        playlists: [{ type: Schema.Types.ObjectId, ref: 'Playlist' }]

    },
    {timestamps:true}
)

module.exports = Account