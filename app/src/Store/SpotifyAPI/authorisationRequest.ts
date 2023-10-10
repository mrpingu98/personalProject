import { generateRandomString } from "./codeVerifier";
import { generateCodeChallenge } from "./codeChallenger";
import { spotifyAPI } from "../../Constants/SpotifyAPI";
import { apiEndpoints } from "../../Constants/Endpoints";

export const CodeVerifier = () => {
let codeVerifier = generateRandomString(128);
//Authorisation step 
generateCodeChallenge(codeVerifier).then(codeChallenge => {
  let state = generateRandomString(16);
  localStorage.setItem('code_verifier', codeVerifier);
  let args = new URLSearchParams({
    response_type: 'code',
    client_id: spotifyAPI.clientId,
    scope: spotifyAPI.scope,
    redirect_uri: spotifyAPI.redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge
  });
  window.location.href = spotifyAPI.authoriseUrl + args;
});

//extracting the authorisation code 
const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');
let codeVerifiers = localStorage.getItem('code_verifier')

//setting up body needed for token request 
let body = new URLSearchParams({
  grant_type: 'authorization_code',
  code: code || '',
  redirect_uri: spotifyAPI.redirectUri,
  client_id: spotifyAPI.clientId,
  code_verifier: codeVerifiers || ''
});

const tokenUrl = apiEndpoints.spotifyTokenRequest

//token request
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
