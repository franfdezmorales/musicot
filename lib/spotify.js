const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

export const getAccessToken = async (refresh_token) => {
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

export const getMasterAccessToken = async (refresh_token) => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
}

export const getSongsFromPlaylist = async (refresh_token) => {

    const { access_token } = await getAccessToken(refresh_token)


    const songs = await fetch(`https://api.spotify.com/v1/playlists/${process.env.SPOTIFY_PLAYLIST_ID}/tracks`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    return songs.json()
};

export const getRecommendedTracks = async (refresh_token) => {

    const { access_token } = await getAccessToken(refresh_token)


    const songs = await fetch(`https://api.spotify.com/v1/recommendations?limit=100&seed_genres=rock%2Cindie%2Cpop%2Crainy-day%2Cchill`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    return songs.json()
}

export const getSongsFromSearch = async (refresh_token, search) => {

    const { access_token } = await getAccessToken(refresh_token)

    const songs = await fetch(`https://api.spotify.com/v1/search?q=track%3A${search}&type=track&limit=50`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    return songs.json()
}

export const addSongToPlaylist = async (refresh_token, uri) => {
    const { access_token } = await getMasterAccessToken(refresh_token)

    const response = await fetch(`https://api.spotify.com/v1/playlists/${process.env.SPOTIFY_PLAYLIST_ID}/tracks?uris=${uri}`, {
        method: 'POST', 
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    return response.json()
}

export const getSongData = async(refresh_token, id) => {

    const { access_token } = await getAccessToken(refresh_token)

    const songData = await fetch(`https://api.spotify.com/v1/audio-features/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    return songData.json()
}