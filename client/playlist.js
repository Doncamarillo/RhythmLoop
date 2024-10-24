document.addEventListener('DOMContentLoaded', async () => {
    const playlistDetailsContainer = document.getElementById('playlist-details');
    const songsContainer = document.getElementById('songs');
    const urlParams = new URLSearchParams(window.location.search);
    const playlistId = urlParams.get('id');

    console.log('Page Loaded. Playlist ID:', playlistId);

  
    const getPlaylistDetails = async (id) => {
        try {
            console.log('Fetching playlist details for ID:', id);
            const response = await axios.get(`http://localhost:3002/playlists/${id}`);
            console.log('Playlist details fetched:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching playlist details:', error);
            return null;
        }
    };

    const displayPlaylistDetails = (playlist) => {
        console.log('Displaying playlist details:', playlist);
        if (!playlistDetailsContainer) {
            console.error('No element with ID "playlist-details" found');
            return;
        }
        if (!playlist) {
            console.error('Playlist data is null or undefined');
            return;
        }
        const detailsHTML = `
            <h3>${playlist.name}</h3>
            <p>${playlist.description}</p>
            <img src="${playlist.playlistImage}" alt="${playlist.name}" style="width:100%;">
        `;
        playlistDetailsContainer.innerHTML = detailsHTML;
    };


    const getSongDetails = async (id) => {
        try {
            console.log('Fetching song details for ID:', id);
            const response = await axios.get(`http://localhost:3002/songs/${id}`);
            console.log('Song details fetched:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching song details:', error);
            return null;
        }
    };

   
    const displaySongs = async (songIds) => {
        songsContainer.innerHTML = '';
        console.log('Displaying songs for song IDs:', songIds);
        if (!songsContainer) {
            console.error('No element with ID "songs" found');
            return;
        }
        for (const id of songIds) {
            const song = await getSongDetails(id);
            if (song) {
                const songHTML = `
                    <div class="song-item" style="background-image: url('${song.albumArt}'); background-size: cover; background-position: center; background-repeat: no-repeat; height: 200px; width: 100%;">
                        <a href="songs.html?id=${song._id}" style="display: block; height: 100%; width: 100%; color: white; text-decoration: none; text-shadow: 1px 1px 2px black; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                            ${song.title} by ${song.artist}
                        </a>
                    </div>
                `;
                songsContainer.innerHTML += songHTML;
            }
        }
    };

    if (playlistId) {
        const playlist = await getPlaylistDetails(playlistId);
        if (playlist) {
            displayPlaylistDetails(playlist);
            await displaySongs(playlist.songs); 
        } else {
            console.error('No playlist details found for ID:', playlistId);
        }
    } else {
        console.error('No playlist ID found in URL');
    }
});
