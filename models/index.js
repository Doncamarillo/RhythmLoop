const mongoose = require('mongoose')
const accountSchema = require ('./account')
const playlistSchema = require('./playlist')
const songSchema = require ('./song')

const Account = mongoose.model('Account',accountSchema)
const Playlist = mongoose.model('Playlist',playlistSchema)
const Song = mongoose.model('Song',songSchema)

module.exports = {
    Account,
    Playlist,
    Song
}