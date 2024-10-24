const getPlaylists = async () => {
    try {
        const response = await axios.get('http://localhost:3002/playlists');
        return response.data;
    } catch (error) {
        console.error('Error getting playlists:', error);
        return [];
    }
};

const getSongs = async () => {
    try {
        const response = await axios.get('http://localhost:3002/songs');
        return response.data;
    } catch (error) {
        console.error('Error getting songs:', error);
        return [];
    }
};

const displayPlaylists = (playlists) => {
    const playlistsGrid = document.getElementById('playlists-grid');
    playlistsGrid.innerHTML = '';
    playlists.forEach(playlist => {
        const div = document.createElement('div');
        div.className = 'playlist-box';
        div.style.backgroundImage = playlist.playlistImage ? `url(${playlist.playlistImage})` : 'none';
        div.style.backgroundColor = playlist.playlistImage ? 'transparent' : '#000';
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
        div.innerHTML = `
            <a href="playlist.html?id=${playlist._id}">
                <h3>${playlist.name}</h3>
                <p>${playlist.description}</p>
            </a>
        `;
        playlistsGrid.appendChild(div);
    });
};

const displaySongs = (songs) => {
    const songsGrid = document.getElementById('songs-grid');
    songsGrid.innerHTML = '';
    songs.forEach(song => {
        const div = document.createElement('div');
        div.className = 'playlist-box';
        div.style.backgroundImage = song.albumArt ? `url(${song.albumArt})` : 'none';
        div.style.backgroundColor = song.albumArt ? 'transparent' : '#000';
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
        div.innerHTML = `
            <a href="songs.html?id=${song._id}">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </a>
        `;
        songsGrid.appendChild(div);
    });
};

const getAndDisplayPlaylists = async () => {
    const playlists = await getPlaylists();
    displayPlaylists(playlists);
};

const getAndDisplaySongs = async () => {
    const songs = await getSongs();
    displaySongs(songs);
};

document.addEventListener('DOMContentLoaded', () => {
    getAndDisplayPlaylists();
    getAndDisplaySongs();
    const urlParams = new URLSearchParams(window.location.search);
    const songId = urlParams.get('id');
    getAndDisplaySongDetails(songId);
});

//songs.html

const getSongDetails = async (id) => {
    console.log('Fetching song details for ID:', id); 
    try {
        const response = await axios.get(`http://localhost:3002/songs/${id}`);
        console.log('Song details response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error getting song details:', error);
    }
};

const getAndDisplaySongDetails = async (id) => {
    const song = await getSongDetails(id);
    if (song) {
        displaySongDetails(song);
    } else {
        console.error('No song details found');
    }
};

const displaySongDetails = (song) => {
    document.getElementById('song-cover').style.backgroundImage = song.albumArt ? `url(${song.albumArt})` : 'none';
    document.getElementById('song-cover').style.backgroundColor = song.albumArt ? 'transparent' : '#000';
    document.getElementById('song-cover').style.backgroundSize = '100%';
    document.getElementById('song-cover').style.backgroundRepeat = 'no-repeat';
    document.getElementById('song-title').innerText = song.title;
    document.getElementById('song-artist').innerText = song.artist;
    document.getElementById('song-genre').innerText = song.genre;
    document.getElementById('song-lyrics').innerText = song.lyrics || 'No lyrics available';
};

const userLyrics = document.getElementById('user-lyrics');
userLyrics.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        const newLyrics = userLyrics.value.trim();
        if (newLyrics) {
            const songId = new URLSearchParams(window.location.search).get('id');
            await updateSongLyrics(songId, newLyrics);
            document.getElementById('song-lyrics').innerText = newLyrics;
            userLyrics.value = '';
        }
    }
});

const updateSongLyrics = async (id, newLyrics) => {
    try {
        await axios.put(`http://localhost:3002/songs/${id}`, { lyrics: newLyrics });
    } catch (error) {
        console.error('Error updating lyrics:', error);
    }
};


