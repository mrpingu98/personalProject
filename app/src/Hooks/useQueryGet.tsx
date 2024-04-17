import { useQuery } from "@tanstack/react-query";
import { get } from "../Store/apiStore";
import { spotifyUserData, spotifyUserPlaylists, spotifyUserTopArtist, spotifyUserTopTracks } from "../Constants/Types/Spotify";

interface UseQueryGet {
  data: any;
  error: Error | null;
  isPending: boolean;
}

interface Props {
  url: string,
  key: string,
  enabled?: boolean,
  header?: object
}

export const useQueryGet = ({ url, key, enabled = true, header }: Props): UseQueryGet => {
  const getRequest = async () => await get(url, header)
  return useQuery({ queryKey: [key], queryFn: getRequest, enabled: enabled, refetchOnMount: false, refetchOnWindowFocus: false });
}



//decided to format the data within the useQuery requests as these are spcific for the spotify request, and won't be used anywhere else

export const useQuerySpotifyUserProfile = ({ url, key, enabled = true, header }: Props): UseQueryGet => {
  const getRequest = async () => {
    const data = await get(url, header)
    const formattedData: spotifyUserData = {
      name: data.display_name,
      email: data.email,
      image: data.images[1].url,
      country: data.country,
      followers: data.followers.total,
      explicitContent: data.explicit_content.filter_enabled,
    }
    return formattedData
  }
  return useQuery({ queryKey: [key], queryFn: getRequest, enabled: enabled, refetchOnMount: false, refetchOnWindowFocus: false });
}

export const useQuerySpotifyUserPlaylists = ({ url, key, enabled = true, header }: Props): UseQueryGet => {
  const getRequest = async () => {
    const data = await get(url, header)
    const formattedData: spotifyUserPlaylists = data.items.map((playlist: any) => ({
        name: playlist.name,
        imageUrl: playlist.images ? playlist.images[0].url : null,
      }));
    return formattedData
  }
  return useQuery({ queryKey: [key], queryFn: getRequest, enabled: enabled, refetchOnMount: false, refetchOnWindowFocus: false });
}

export const useQuerySpotifyUserTopArtists = ({ url, key, enabled = true, header }: Props): UseQueryGet => {
  const getRequest = async () => {
    const data = await get(url, header)
    const formattedData: spotifyUserTopArtist = {
      name: data.items.map((artist: any) => artist.name),
    }
    return formattedData
  }
  return useQuery({ queryKey: [key], queryFn: getRequest, enabled: enabled, refetchOnMount: false, refetchOnWindowFocus: false });
}


export const useQuerySpotifyUserTopTracks = ({ url, key, enabled = true, header }: Props): UseQueryGet => {
  const getRequest = async () => {
    const data = await get(url, header)
    const formattedData: spotifyUserTopTracks = data.items.map((track: any) => ({
      song: track.name,
      artist: track.artists[0].name,
    }));
    return formattedData
  }
  return useQuery({ queryKey: [key], queryFn: getRequest, enabled: enabled, refetchOnMount: false, refetchOnWindowFocus: false });
}