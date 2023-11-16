import { useSelector } from "react-redux";
import { AppState } from "../rootReducer";
import { spotifyUserData } from "../../Types/Spotify";

interface SpotifyDataHook {
  spotifyUserData: spotifyUserData | null;
}

export const useSpotifyData = (): SpotifyDataHook => {
  const { userPersonalData } = useSelector(
    (state: AppState) => state.spotifyData
  );
  return {
    spotifyUserData: userPersonalData,
  };
};
