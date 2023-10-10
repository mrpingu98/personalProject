import { apiEndpoints } from "../../Constants/Endpoints";

async function getProfile() {
    let accessToken = localStorage.getItem('access_token');
    const topTracksUrl = apiEndpoints.spotifyUserProfile
  
    const response = await fetch(topTracksUrl, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    const data = await response.json();
    return data
  }
  export {getProfile}

  //most played track, favourite genres, favourite artists