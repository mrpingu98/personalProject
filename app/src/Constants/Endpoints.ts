export const apiEndpoints = {
    spotifyUserTopTracks: `https://api.spotify.com/v1/me/top/tracks?limit=${10}`,
    spotifyAllTimeUserTopTracks: `https://api.spotify.com/v1/me/top/tracks?limit=${10}&time_range=long_term`,
    spotifyTokenRequest: 'https://accounts.spotify.com/api/token',
    spotifyUserProfile: 'https://api.spotify.com/v1/me',
    spotifyUserTopArtists: `https://api.spotify.com/v1/me/top/artists?limit=${10}`,
    spotifyUserPlaylists: `https://api.spotify.com/v1/me/playlists?limit=${10}`
}