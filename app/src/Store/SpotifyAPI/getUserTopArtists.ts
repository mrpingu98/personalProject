import { apiEndpoints } from "../../Constants/Endpoints";

function* getUserTopArtists() {
  const accessToken = localStorage.getItem("access_token");
  const userTopArtistsUrl = apiEndpoints.spotifyUserTopArtists;
  try {
    // @ts-ignore
    const response = yield fetch(userTopArtistsUrl, {
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

export { getUserTopArtists };
