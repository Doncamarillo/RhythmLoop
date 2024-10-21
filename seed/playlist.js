const db = require('mongoose')
const {Account, Playlist} = require ('../models')

db.on('error',console.error.bind (console,'MongoDb connection error'))

const main = async () => {
 
    const playlists = [
        {
            name: 'Grass Skirts and Blue Dogs',
            playlistImage: 
            description: 
            dateCreated: 
            songs: 
            accounts: 
        },
        {
            name: 'Stand Up but not the funny kind',
            playlistImage: 
            description: 
            dateCreated: 
            songs: 
            accounts: 
        },
        {
            name: 'Calm',
            description: 
            dateCreated: 
            songs: 
            accounts: 
        },
        {
            name: 'Rap',
            description: 
            dateCreated: 
            songs: 
            accounts: 
        },
        {
            name: 'Pop'
            description: 
            dateCreated: 
            songs: 
            accounts: 
        },
    ]
}