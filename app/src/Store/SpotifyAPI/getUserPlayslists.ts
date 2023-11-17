import { apiEndpoints } from "../../Constants/Endpoints";

function* getUserPlaylists() {
  const accessToken = localStorage.getItem("access_token");
  const userPlaylistsUrl = apiEndpoints.spotifyUserPlaylists;
  try {
    // @ts-ignore
    const response = yield fetch(userPlaylistsUrl, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    // @ts-ignore
    const data = yield response.json();
    return data;
  } catch (error) {
    throw new Error("Error " + error);
  }
}

export { getUserPlaylists };