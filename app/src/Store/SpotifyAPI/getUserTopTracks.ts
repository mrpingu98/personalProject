/* eslint-disable @typescript-eslint/ban-ts-comment */
import { apiEndpoints } from "../../Constants/Endpoints";
import { yieldGet } from "../apiStore";

function* getUserTopTracks() {
  const accessToken = localStorage.getItem("access_token");
  const userTopTracksUrl = apiEndpoints.spotifyUserTopTracks;
  try {
    // @ts-ignore
    const response = yield yieldGet(userTopTracksUrl, {Authorization: "Bearer " + accessToken,})
    // @ts-ignore
    const data = yield response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export { getUserTopTracks };