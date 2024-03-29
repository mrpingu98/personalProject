import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { spotifyUserData, spotifyUserPlaylists, spotifyUserTopArtist, spotifyUserTopTracks } from "../../Constants/Types/Spotify";

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
    allTimeTopTracksFetched: boolean;
    allTimeTopTracksLoading: boolean;
    allTimeUserTopTracks: spotifyUserTopTracks | null;
    allTimeTopArtistsLoading: boolean;
    allTimeTopArtistsFetched: boolean;
    allTimeUserTopArtists: spotifyUserTopArtist | null;
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
    userPlaylists: null,
    allTimeTopTracksFetched: false,
    allTimeTopTracksLoading: false,
    allTimeUserTopTracks: null,
    allTimeTopArtistsFetched: false,
    allTimeTopArtistsLoading: false,
    allTimeUserTopArtists: null
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
        },
        fetchAllTimeUserTopTracks(state: SpotifyDataState){
            state.allTimeTopTracksLoading = true
        },
        fetchAllTimeUserTopTracksSuccess(state: SpotifyDataState, action:PayloadAction<spotifyUserTopTracks>){
            state.allTimeTopTracksLoading = false
            state.allTimeTopTracksFetched = true;
            state.allTimeUserTopTracks = action.payload
        },
        fetchAllTimeUserTopArtists(state: SpotifyDataState) {
            state.allTimeTopArtistsLoading= true
        },
        fetcAllTimeUserTopArtistsSuccess(state: SpotifyDataState, action:PayloadAction<spotifyUserTopArtist>) {
            state.allTimeTopArtistsLoading = false
            state.allTimeTopArtistsFetched = true
            state.allTimeUserTopArtists = action.payload
        },

    }
})

const spotifyDataActions = spotifyDataSlice.actions;

export {spotifyDataSlice, spotifyDataActions}