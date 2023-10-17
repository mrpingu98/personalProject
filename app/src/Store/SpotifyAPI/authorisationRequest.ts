import { generateRandomString } from "./codeVerifier";
import { generateCodeChallenge } from "./codeChallenger";
import { spotifyAPI } from "../../Constants/SpotifyAPI";
import { apiEndpoints } from "../../Constants/Endpoints";

export const AuthorisationRequest = () => {
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
}