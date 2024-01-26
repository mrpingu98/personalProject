import { useDispatch, useSelector } from "react-redux";
import { spotifyDataActions } from "./state";
import { AppState } from "../rootReducer";
import React from "react";

export const withRefreshAccessToken = () => (Component: React.ComponentType) => {
    const WrappedComponent: React.FC = (props) => {
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
    // Set the displayName for the HOC
    WrappedComponent.displayName = `withRefreshAccessToken(${Component.displayName || Component.name})`;
    return WrappedComponent;
  };

export const withSpotifyUserPersonalData = () => (Component: React.ComponentType) => {
    const WrappedComponent: React.FC = (props) => {
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
    WrappedComponent.displayName = `withSpotifyUserPersonalData(${Component.displayName || Component.name})`;
    return WrappedComponent;
  };

  export const withSpotifyUserTopArtists = () => (Component: React.ComponentType) => {
    const WrappedComponent: React.FC = (props) => {
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
    WrappedComponent.displayName = `withSpotifyUserTopArtists(${Component.displayName || Component.name})`;
    return WrappedComponent;
  };

  export const withSpotifyUserTopTracks = () => (Component: React.ComponentType) => {
    const WrappedComponent: React.FC = (props) => {
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
    WrappedComponent.displayName = `withSpotifyUserTopTracks(${Component.displayName || Component.name})`;
    return WrappedComponent;
  };

  export const withSpotifyAllTimeUserTopTracks = () => (Component: React.ComponentType) => {
    const WrappedComponent: React.FC = (props) => {
      const dispatch = useDispatch();
      const { allTimeTopTracksFetched, allTimeTopTracksLoading } = useSelector((state: AppState) => state.spotifyData);

      React.useEffect(() => {
        if (!allTimeTopTracksFetched) {
          dispatch(spotifyDataActions.fetchAllTimeUserTopTracks());
        }
      }, [dispatch, allTimeTopTracksFetched]);

      if (allTimeTopTracksLoading || !allTimeTopTracksFetched) return <div />;
      return <Component {...props} />;
    };
    WrappedComponent.displayName = `withSpotifyUserTopTracks(${Component.displayName || Component.name})`;
    return WrappedComponent;
  };

  export const withSpotifyUserPlaylists = () => (Component: React.ComponentType) => {
    const WrappedComponent: React.FC = (props) => {
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
    WrappedComponent.displayName = `withSpotifyUserPlaylists(${Component.displayName || Component.name})`;
    return WrappedComponent;
  };
