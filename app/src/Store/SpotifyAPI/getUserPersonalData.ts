import { apiEndpoints } from "../../Constants/Endpoints";

function* getSpotifyUserProfile() {
  const accessToken = localStorage.getItem("access_token");
  const userProfileUrl = apiEndpoints.spotifyUserProfile;
  try {
    // @ts-ignore
    const response = yield fetch(userProfileUrl, {
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

export { getSpotifyUserProfile };
