document.addEventListener('DOMContentLoaded', () => {
    getAndDisplayPlaylists();
    getAndDisplaySongs();
});

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


window.addEventListener('load', () => {
    getAndDisplayPlaylists();
    getAndDisplaySongs();
});
