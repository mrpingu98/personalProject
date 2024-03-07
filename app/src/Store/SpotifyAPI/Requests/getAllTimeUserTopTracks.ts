import { apiEndpoints } from "../../Endpoints";
import { yieldGet } from "../../apiStore";

function* getAllTimeUserTopTracks() {
  const accessToken = localStorage.getItem("access_token");
  const userTopTracksUrl = apiEndpoints.spotifyAllTimeUserTopTracks;
  try {
    // @ts-ignore
    const response = yield yieldGet(userTopTracksUrl, {Authorization: "Bearer " + accessToken,})
    // @ts-ignore
    const data = yield response.json();
    console.log('1')
    return data;
  } catch (error) {
    console.log(error)
  }
}

export { getAllTimeUserTopTracks };