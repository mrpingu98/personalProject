import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { spotifyUserData, spotifyUserPlaylists, spotifyUserTopArtist, spotifyUserTopTracks } from "../../Types/Spotify";

export interface SpotifyDataState {
    loading: boolean;
    refreshLoading: boolean;
    refreshFetched: boolean;
    fetched: boolean;
    userPersonalData: spotifyUserData | null;
    topArtistsLoading: boolean;
    topArtistsFetched: boolean;
    userTopArtists: spotifyUserTopArtist | null;
    topTracksFetched: boolean;
    topTracksLoading: boolean;
    userTopTracks: spotifyUserTopTracks | null;
    playlistsFetched: boolean;
    playlistsLoading: boolean;
    userPlaylists: spotifyUserPlaylists | null;
}

export const initialState: SpotifyDataState = {
    refreshLoading: false,
    refreshFetched: false,
    loading: false,
    fetched: false,
    userPersonalData: null,
    topArtistsLoading: false,
    topArtistsFetched: false,
    userTopArtists: null,
    topTracksFetched: false,
    topTracksLoading: false,
    userTopTracks: null,
    playlistsFetched: false,
    playlistsLoading: false,
    userPlaylists: null
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
        },
        fetchUserTopArtists(state: SpotifyDataState) {
            state.topArtistsLoading = true
        },
        fetchUserTopArtistsSuccess(state: SpotifyDataState, action:PayloadAction<spotifyUserTopArtist>) {
            state.topArtistsLoading = false
            state.topArtistsFetched = true
            state.userTopArtists = action.payload
        },
        fetchUserTopTracks(state: SpotifyDataState) {
            state.topTracksLoading= true
        },
        fetchUserTopTracksSuccess(state: SpotifyDataState, action:PayloadAction<spotifyUserTopTracks>) {
            state.topTracksLoading = false
            state.topTracksFetched = true
            state.userTopTracks = action.payload
        },
        fetchUserPlaylists(state: SpotifyDataState) {
            state.playlistsLoading= true
        },
        fetchUserPlaylistsSuccess(state: SpotifyDataState, action:PayloadAction<spotifyUserPlaylists>) {
            state.playlistsLoading = false
            state.playlistsFetched = true
            state.userPlaylists = action.payload
        }
    }
})

const spotifyDataActions = spotifyDataSlice.actions;

export {spotifyDataSlice, spotifyDataActions}