import { apiEndpoints } from "../../Endpoints";
import { yieldGet } from "../../apiStore";

function* getSpotifyUserProfile() {
  const accessToken = localStorage.getItem("access_token");
  const userProfileUrl = apiEndpoints.spotifyUserProfile;
  try {
    // @ts-ignore
    const response = yield yieldGet(userProfileUrl, {Authorization: "Bearer " + accessToken,})
    // @ts-ignore
    const data = yield response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export { getSpotifyUserProfile };
