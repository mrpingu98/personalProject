import { spotifyAPI } from "../../Constants/SpotifyAPI";

export const fetchTokenRequest = () => {
  const searchParams = new URLSearchParams(window.location.search);
  
  if (searchParams.has("code")) {
    const codeVerifiers = localStorage.getItem("code_verifier");
    const code = searchParams.get('code')

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code || "",
        redirect_uri: spotifyAPI.redirectUri,
        client_id: spotifyAPI.clientId,
        code_verifier: codeVerifiers || "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
          //need to do error handling for this 
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
      })
  }
};

//first we check if the url has a query parameter 'code' - if it does, extract it and save to local storage 
//then pass this in the body of our token request 