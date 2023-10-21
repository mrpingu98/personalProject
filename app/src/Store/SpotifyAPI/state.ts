import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { spotifyUserData } from "../../Types/Spotify";

export interface SpotifyDataState {
    loading: boolean;
    refreshLoading: boolean;
    refreshFetched: boolean;
    fetched: boolean;
    userPersonalData: spotifyUserData | null;
};

export const initialState: SpotifyDataState = {
    loading: false,
    refreshLoading: false,
    refreshFetched: false,
    fetched: false,
    userPersonalData: null
};

const spotifyDataSlice = createSlice({
    name: 'SpotifyData',
    initialState,
    reducers: {
        fetchRefreshToken(state: SpotifyDataState) {
            state.refreshLoading = true
        },
        fetchRefreshTokenSuccess(state: SpotifyDataState) {
            state.refreshLoading = false
            state.refreshFetched = true
        },
        fetchUserProfile(state: SpotifyDataState) {
            state.loading = true
        },
        fetchUserProfileSuccess(state: SpotifyDataState, action:PayloadAction<spotifyUserData>) {
            state.loading = false
            state.fetched = true
            state.userPersonalData = action.payload
        }
    }
})

const spotifyDataActions = spotifyDataSlice.actions;

export {spotifyDataSlice, spotifyDataActions}