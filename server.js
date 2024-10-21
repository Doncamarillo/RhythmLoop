const express = require ('express')
const cors = require ('cors')
const db = require ('./db')
const bodyParser = require ('body-parser')
const morgan = require ('morgan')
const {Account, Playlist, Song} = require ('./models')

const accountController = require ('./controllers/accountController')
const songController = require ('./controllers/songController')
const playlistController = require ('./controllers/playlistController')

const PORT = process.env.PORT || 3001

const app = express() 
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

(async () => {
    try{
        await connectDB();
    } catch (error) {
        console.error('Failed to connect to database')
    }
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get ('/', (req,res) => res.send('RhythmLoop Home Page'))

