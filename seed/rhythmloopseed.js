const db = require('../db')
const {Song, Playlist, Account} = require('../models')

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
    const songs = await Song.insertMany([
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
        },
    ])
        const accounts  = await Account.insertMany([
            {
            username: 'doncamarillo',
            name: 'Don Camarillo',
            email: 'don_camarillo@gmail.com',
            phoneNumber : 3105481264,
            },
            {
            username: 'KentaeviousSoto',
            name: 'Kentaevious Soto',
            email: 'mynba2kplayer@gmail.com',
            phoneNumber : 6191523258,
    
            },
            {
            username: 'Jimniy_Cooks',
            name:'Aubrey Graham',
            email: 'nothingwasthesame@hotmail.com',
            phoneNumber : 3235048564,
            },
            {
            username: 'NoShnacks',
            name: 'Brian Long',
            email:'NoShnacks123@gmail.com',
            phoneNumber: 6548485652,
            }
        ]);
            const playlists = await Playlist.insertMany([
            {
                name: 'Grass Skirts and Blue Dogs',
                description: 'Im sure elvis had his bad days too',
                dateCreated: new Date (), 
                songs: [songs[1]._id, songs[7]._id],
                accounts: [accounts[0]._id]
            },
            {
                name: 'Stand Up but not the funny kind',
                description: 'gym playlist',
                dateCreated: new Date (),
                songs: [songs[0]._id, songs[2]._id, songs[7]._id],
                accounts: [accounts[1]._id]
            },
            {
                name: 'Calm',
                description: 'alt rnb',
                dateCreated: new Date (), 
                songs: [songs[2]._id,songs[8]._id],
                accounts: [accounts[1]._id]
            },
            {
                name: 'Rap',
                description: 'hits only !',
                dateCreated: new Date (),
                songs: [songs[0]._id,songs[2]._id,songs[9]._id],
                accounts: [accounts[0]._id]
            },
            {
                name: 'Pop',
                description: 'pop songs',
                dateCreated: new Date (),
                songs:[songs[3]._id ,songs[7]._id],
                accounts: [accounts[3]._id]
            },
        ])
    

}

const run = async () => {
    await main()
    db.close()
}

run()