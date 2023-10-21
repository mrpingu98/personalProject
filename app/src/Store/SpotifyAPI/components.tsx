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

//explain HOC's
//used to enhance react components
//props is used to pass through any props that may be used for the react component to be rendered
//Can pass multiple HOC's, and order they are put in is the order they are called in
