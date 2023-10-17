import { getProfile } from "./getProfile";
import { refreshAccessToken } from "./refreshAccessToken";

export const fetchPersonalisedSpotifyData = () => {
  refreshAccessToken().then(() => {
    getProfile();
  });
};
