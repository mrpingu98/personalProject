import { apiEndpoints } from "../../Constants/Endpoints";

async function getSpotifyUserProfile() {
    let accessToken = localStorage.getItem('access_token');
    const userProfileUrl = apiEndpoints.spotifyUserProfile
    const response = await fetch(userProfileUrl, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    const data = await response.json();
    return data
  }
  export {getSpotifyUserProfile}