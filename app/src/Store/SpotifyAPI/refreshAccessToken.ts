import { apiEndpoints } from "../../Constants/Endpoints";

export const refreshAccessToken = () => {
    const refreshToken = localStorage.getItem('refresh_token');
    const tokenUrl = apiEndpoints.spotifyTokenRequest
    const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken == null ? '' : refreshToken,
        client_id: '44deba64e2b04230a4e7c818ca419918'
    })

fetch(tokenUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body
})
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}