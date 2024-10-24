const {Playlist} = require('../models')


const getAllPlaylists = async (req,res) => {
    try {
        const playlist = await Playlist.find ()
        res.json(playlist)
    } catch (error) {
        return res.status (500).send(error.message)
    }
    }

const getPlaylistById = async (req,res) => {
    try {
        const {id} = req.params
        const playlist = await Playlist.findById(id)
        if (playlist) {
            return res.json(playlist)
        }
        return res.status (404).send('Playlist does not exist')
    } catch (error) {
        return res.status (500).send(error.message);
    }
    
}

const getPlaylistByName = async (req, res) => {
    try { 
        const name = await Account.find( {'name': req.params.name})
        console.log(name)
        if (name) {
            return res.json(name);
        }
        return res.status(404).send('username not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }
  
const createPlaylist = async (req, res) => {
    try {
        const playlist = await new Playlist(req.body)
        await playlist.save()
        return res.status(201).json({
            playlist,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updatePlaylist = async (req,res) => {
    try {
        let {id} = req.params
        let playlist = await Playlist.findByIdAndUpdate (id, req.body,{new:true})
        if (playlist) {
            return res.status(200).json(playlist)
        }
        throw new Error('Playlist not found')
    } catch (error) {
            return res.status (500).send(error.message)
        }
    }

    const deletePlaylist = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Playlist.findByIdAndDelete(id)
            if (deleted) {
                return res.status(200).send("Playlist deleted");
            }
            throw new Error("Playlist not found");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    module.exports = {
        getAllPlaylists,
        getPlaylistById,
        getPlaylistByName,
        createPlaylist,
        updatePlaylist,
        deletePlaylist
    }
    
