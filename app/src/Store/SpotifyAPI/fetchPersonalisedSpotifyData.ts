import { getSpotifyUserProfile } from "./getSpotifyUserProfile";
import { refreshAccessToken } from "./refreshAccessToken";

export const fetchPersonalisedSpotifyData = () => {
  refreshAccessToken().then(() => {
    getSpotifyUserProfile();
  });
};
