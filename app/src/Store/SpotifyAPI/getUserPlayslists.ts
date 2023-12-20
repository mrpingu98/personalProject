/* eslint-disable @typescript-eslint/ban-ts-comment */
import { apiEndpoints } from "../../Constants/Endpoints";
import { yieldGet } from "../apiStore";

function* getUserPlaylists() {
  const accessToken = localStorage.getItem("access_token");
  const userPlaylistsUrl = apiEndpoints.spotifyUserPlaylists;
  try {
    // @ts-ignore
    const response = yield yieldGet(userPlaylistsUrl, { Authorization: "Bearer " + accessToken,})
    // @ts-ignore
    const data = yield response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export { getUserPlaylists };