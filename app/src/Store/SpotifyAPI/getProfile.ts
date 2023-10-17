import { apiEndpoints } from "../../Constants/Endpoints";

async function getProfile() {
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
  export {getProfile}