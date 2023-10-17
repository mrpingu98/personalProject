import { apiEndpoints } from "../../Constants/Endpoints";

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  const tokenUrl = apiEndpoints.spotifyTokenRequest;
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken == null ? "" : refreshToken,
    client_id: "44deba64e2b04230a4e7c818ca419918",
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });
  if (!response.ok) {
    throw new Error("HTTP status " + response.status);
  }
  const data = await response.json();
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  return data;
};


//made this into an async function that returns a promise 
//now that it returns a promise, we can call this function and then add on .then() - (once you've returned/await your promise, then do the following)
//need this so that on load of spotify page, we call this function, and only once it is done, do we then then call the data from spotify 