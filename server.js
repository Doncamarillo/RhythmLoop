const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.json());



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))



const accountController = require('./controllers/accountController');
const songController = require('./controllers/songController');
const playlistController = require('./controllers/playlistController');

const cors = require('cors');

app.use(cors());



app.get('/', (req, res) => res.send('RhythmLoop Home Page'));

// Songs
app.get('/songs', songController.getAllSongs);
app.get('/songs/titles/:name', songController.getSongByTitle);
app.get('/songs/:id', songController.getSongById);
app.post('/songs', songController.createSong);
app.put('/songs/:id', songController.updateSong);
app.delete('/songs/:id', songController.deleteSong);

// Accounts
app.get('/accounts', accountController.getAllAccounts);
app.get('/accounts/username/:username', accountController.getAccountByUsername);
app.get('/accounts/:id', accountController.getAccountById);
app.post('/accounts', accountController.createAccount);
app.put('/accounts/:id', accountController.updateAccount);
app.delete('/accounts/:id', accountController.deleteAccount);

// Playlists
app.get('/playlists', playlistController.getAllPlaylists);
app.get('/playlists/name/:name', playlistController.getPlaylistByName);
app.get('/playlists/:id', playlistController.getPlaylistById);
app.post('/playlists', playlistController.createPlaylist);
app.put('/playlists/:id', playlistController.updatePlaylist);
app.delete('/playlist/:id', playlistController.deletePlaylist);

