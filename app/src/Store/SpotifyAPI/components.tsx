/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { spotifyDataActions } from "./state";
import { AppState } from "../rootReducer";
import React from "react";

export const withRefreshAccessToken = () => (Component: React.ComponentType<any>) => {
    return (props: any) => {
      const dispatch = useDispatch();
      const { refreshFetched, refreshLoading } = useSelector((state: AppState) => state.spotifyData);

      React.useEffect(() => {
        if (!refreshFetched) {
          dispatch(spotifyDataActions.fetchRefreshToken());
        }
      }, [dispatch, refreshFetched]);

      if (refreshLoading || !refreshFetched) return <div />;
      return <Component {...props} />;
    };
  };

export const withSpotifyUserPersonalData = () => (Component: React.ComponentType<any>) => {
    return (props: any) => {
      const dispatch = useDispatch();
      const { fetched, loading } = useSelector((state: AppState) => state.spotifyData);

      React.useEffect(() => {
        if (!fetched) {
          dispatch(spotifyDataActions.fetchUserProfile());
        }
      }, [dispatch, fetched]);

      if (loading || !fetched) return <div />;
      return <Component {...props} />;
    };
  };

  export const withSpotifyUserTopArtists = () => (Component: React.ComponentType<any>) => {
    return (props: any) => {
      const dispatch = useDispatch();
      const { topArtistsFetched, topArtistsLoading } = useSelector((state: AppState) => state.spotifyData);

      React.useEffect(() => {
        if (!topArtistsFetched) {
          dispatch(spotifyDataActions.fetchUserTopArtists());
        }
      }, [dispatch, topArtistsFetched]);

      if (topArtistsLoading || !topArtistsFetched) return <div />;
      return <Component {...props} />;
    };
  };

  export const withSpotifyUserTopTracks = () => (Component: React.ComponentType<any>) => {
    return (props: any) => {
      const dispatch = useDispatch();
      const { topTracksFetched, topTracksLoading } = useSelector((state: AppState) => state.spotifyData);

      React.useEffect(() => {
        if (!topTracksFetched) {
          dispatch(spotifyDataActions.fetchUserTopTracks());
        }
      }, [dispatch, topTracksFetched]);

      if (topTracksLoading || !topTracksFetched) return <div />;
      return <Component {...props} />;
    };
  };

  export const withSpotifyUserPlaylists = () => (Component: React.ComponentType<any>) => {
    return (props: any) => {
      const dispatch = useDispatch();
      const { playlistsFetched, playlistsLoading } = useSelector((state: AppState) => state.spotifyData);

      React.useEffect(() => {
        if (!playlistsFetched) {
          dispatch(spotifyDataActions.fetchUserPlaylists());
        }
      }, [dispatch, playlistsFetched]);

      if (playlistsLoading || !playlistsFetched) return <div />;
      return <Component {...props} />;
    };
  };
