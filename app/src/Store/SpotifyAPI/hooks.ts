import { useSelector } from "react-redux";
import { AppState } from "../rootReducer";
import { spotifyUserData, spotifyUserPlaylists, spotifyUserTopArtist, spotifyUserTopTracks } from "../../Types/Spotify";

interface SpotifyDataHook {
  spotifyUserData: spotifyUserData | null;
  userTopArtists: spotifyUserTopArtist | null;
  userTopTracks: spotifyUserTopTracks | null;
  userPlaylists: spotifyUserPlaylists | null;
  allTimeUserTopTracks: spotifyUserTopTracks | null;
}

export const useSpotifyData = (): SpotifyDataHook => {
  const { userPersonalData, userTopArtists, userTopTracks, userPlaylists, allTimeUserTopTracks } = useSelector(
    (state: AppState) => state.spotifyData
  );
  return {
    spotifyUserData: userPersonalData,
    userTopArtists: userTopArtists,
    userTopTracks: userTopTracks,
    userPlaylists: userPlaylists,
    allTimeUserTopTracks: allTimeUserTopTracks,
  };
};
