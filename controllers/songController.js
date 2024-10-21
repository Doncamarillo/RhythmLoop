const Song = require('../models/song')

const getAllSongs = async (req,res) => {
    try {
        const songs = await Song.find ()
        res.json(songs)
    } catch (error) {
        return res.status (500).send(error.message)
    }
    }

const getSongById = async (req,res) => {
    try {
        const {id} = req.params
        const song = await Song.findById(id)
        if (category) {
            return res.json(category)
        }
        return res.status (404).send('Song does not exist')
    } catch (error) {
        return res.status (500).send(error.message);
    }
    
}
const createSong = async (req, res) => {
    try {
        const song = await new Song(req.body)
        await song.save()
        return res.status(201).json({
            song,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateSong = async (req,res) => {
    try {
        let {id} = req.params
        let category = await Song.findByIdAndUpdate (id, req.body,{new:true})
        if (song) {
            return res.status(200).json(song)
        }
        throw new Error('Song not found')
    } catch (error) {
            return res.status (500).send(error.message)
        }
    }

    const deleteSong = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Song.findByIdAndDelete(id)
            if (deleted) {
                return res.status(200).send("Song deleted");
            }
            throw new Error("Song not found");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    module.exports = {
        getAllSongs,
        getSongById,
        createSong,
        updateSong,
        deleteSong
    }
    
