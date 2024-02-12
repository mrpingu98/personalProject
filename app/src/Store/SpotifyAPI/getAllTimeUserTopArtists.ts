import { apiEndpoints } from "../../Constants/Endpoints";
import { yieldGet } from "../apiStore";

function* getAllTimeUserTopArtists() {
  const accessToken = localStorage.getItem("access_token");
  const userTopArtistsUrl = apiEndpoints.spotifyAllTimeUserTopArtists;
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

export { getAllTimeUserTopArtists };