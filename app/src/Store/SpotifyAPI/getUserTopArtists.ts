/* eslint-disable @typescript-eslint/ban-ts-comment */
import { apiEndpoints } from "../../Constants/Endpoints";
import { yieldGet } from "../apiStore";

function* getUserTopArtists() {
  const accessToken = localStorage.getItem("access_token");
  const userTopArtistsUrl = apiEndpoints.spotifyUserTopArtists;
  try {
    // @ts-ignore
    const response = yield yieldGet(userTopArtistsUrl, { Authorization: "Bearer " + accessToken,})
    // @ts-ignore
    const data = yield response.json();
    return data;
  } catch (error) {
    console.log(Error)
  }
}

export { getUserTopArtists };
