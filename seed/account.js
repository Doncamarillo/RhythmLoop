const db = require('../db')
const Account = require('../models')

db.on ('error', console.error.bind (console, 'MongoDB connection error:'))

const main = async () => {
    const accounts  = [
        {
        username: 'doncamarillo',
        name: 'Don Camarillo',
        email: 'don_camarillo@gmail.com',
        phoneNumber : 3105481264,
        playlists:
        },
        {
        username: 'KentaeviousSoto',
        name: 'Kentaevious Soto',
        email: 'mynba2kplayer@gmail.com',
        phoneNumber : 6191523258,
        playlists:
        },
        {
        username: 'Jimniy_Cooks',
        name:'Aubrey Graham',
        email: 'nothingwasthesame@hotmail.com',
        phoneNumber : 3235048564,
        playlists:
        },
        {
        username: 'NoShnacks',
        name: 'Brian Long',
        email:'NoShnacks123@gmail.com',
        phone: 6548485652,
        playlists:
        }
    ];

    await Account.insertMany(accounts)
    console.log('Created Accounts')
}

const run = async () => {
    await main ()
    db.close ()
}

run ()