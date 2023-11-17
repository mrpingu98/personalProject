import { apiEndpoints } from "../../Constants/Endpoints";

function* getUserTopTracks() {
  const accessToken = localStorage.getItem("access_token");
  const userTopTracksUrl = apiEndpoints.spotifyUserTopTracks;
  try {
    // @ts-ignore
    const response = yield fetch(userTopTracksUrl, {
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

export { getUserTopTracks };