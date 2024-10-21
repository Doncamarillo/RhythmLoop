const db = require('../db')
const {Song} = require('../models')

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
    const songs = [
        {
            title: '530',
            artist: 'Kanye West',
            album: 'Vultures 2',
            genre: 'Rap',
            uploadDate: new Date(),
            explicit: true
        },
        {
            title: 'Leaving With Me',
            artist: 'J Boog',
            album: 'Live Up',
            genre: 'Reggae',
            uploadDate: new Date(),
            explicit: false
        },
        {
            title: 'tough love',
            artist: 'Lampmen',
            album: 'Winners Circle',
            genre: 'Rap',
            uploadDate: new Date(),
            explicit: true
        },
        {
            title: 'Too Good',
            artist: 'Drake',
            album: 'Views',
            genre: 'Rap',
            uploadDate: new Date(),
            explicit: true
        },
        {
            title: 'Too Good to Say Goodbye',
            artist: 'Bruno Mars',
            album: '24K Magic',
            genre: 'Pop',
            uploadDate: new Date(),
            explicit: false
        },
        {
            title: 'Cant Tell Me Nothing',
            artist: 'Kanye West',
            album: 'Graduation',
            genre: 'Rap',
            uploadDate: new Date(),
            explicit: true
        },
        {
            title: 'live with it',
            artist: 'Lampmen',
            album: 'Winners Circle',
            genre: 'Rap',
            uploadDate: new Date(),
            explicit: true
        },
        {
            title: 'Morning Time',
            artist: 'Fia',
            album: 'Love Me - Single',
            genre: 'Reggae',
            uploadDate: new Date(),
            explicit: false
        },
        {
            title: 'Calling All My Lovelies',
            artist: 'Bruno Mars',
            album: '24K Magic',
            genre: 'Pop',
            uploadDate: new Date(),
            explicit: false
        },
        {
            title: 'X',
            artist: '21 Savage',
            album: 'Savage Mode',
            genre: 'Rap',
            uploadDate: new Date(),
            explicit: true
        },]

    await Song.insertMany(songs)
    console.log('songs saved')
}

const run = async () => {
    await main()
    db.close()
}

run()