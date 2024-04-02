
let apiUrl;
if (process.env.NODE_ENV === 'development'){
    apiUrl = process.env.REACT_APP_API_URL_DEV
} else {
    apiUrl = process.env.REACT_APP_API_URL_PROD
}

export const apiEndpoints = {
    spotifyUserTopTracks: `https://api.spotify.com/v1/me/top/tracks?limit=${10}`,
    spotifyAllTimeUserTopTracks: `https://api.spotify.com/v1/me/top/tracks?limit=${10}&time_range=long_term`,
    spotifyTokenRequest: 'https://accounts.spotify.com/api/token',
    spotifyUserProfile: 'https://api.spotify.com/v1/me',
    spotifyUserTopArtists: `https://api.spotify.com/v1/me/top/artists?limit=${10}`,
    spotifyAllTimeUserTopArtists: `https://api.spotify.com/v1/me/top/artists?limit=${10}&time_range=long_term`,
    spotifyUserPlaylists: `https://api.spotify.com/v1/me/playlists?limit=${10}`,
    products: `${apiUrl}/product`,
}