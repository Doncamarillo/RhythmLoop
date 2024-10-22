const getSongs = async () => {
    try {
        const response = await axios.get('http://localhost:3002/songs');
        const songLibrary = response.data;
        console.log('Songs:', songLibrary);
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
};

const getPlaylists = async () => {
    try {
        const response = await axios.get('http://localhost:3002/playlists');
        const playlists = response.data;
        console.log('Playlists:', playlists);
    } catch (error) {
        console.error('Error fetching playlists:', error);
    }
};

const getAccounts = async () => {
    try {
        const response = await axios.get('http://localhost:3002/accounts');
        const accounts = response.data;
        console.log('Accounts:', accounts);
    } catch (error) {
        console.error('Error fetching accounts:', error);
    }
};

// Call the functions
getSongs();
getPlaylists();
getAccounts();
