import { spotifyUserTopArtist } from "../../Constants/Types/Spotify";
import { getSpotifyUserProfile } from "./getUserPersonalData";
import { getUserPlaylists } from "./getUserPlayslists";
import { getUserTopArtists } from "./getUserTopArtists";
import { getUserTopTracks } from "./getUserTopTracks";
import { refreshToken } from "./refreshToken";
import { spotifyDataActions } from "./state";
import { takeLatest, put } from "redux-saga/effects";
import { routes } from "../../Constants/Routes";
import { getAllTimeUserTopTracks } from "./getAllTimeUserTopTracks";
import { getAllTimeUserTopArtists } from "./getAllTimeUserTopArtists";

function* fetchRefreshTokenWorker() {
  try {
    yield refreshToken();
    yield put(spotifyDataActions.fetchRefreshTokenSuccess());
  } catch (error) {
    console.log(error)
  }
}

function* fetchUserProfileWorker() {
  try {
    // @ts-ignore
    const response = yield getSpotifyUserProfile();
    // @ts-ignore
    const data = yield response;
    yield put(
      spotifyDataActions.fetchUserProfileSuccess({
        name: data.display_name,
        email: data.email,
        image: data.images[1].url,
        country: data.country,
        followers: data.followers.total,
        explicitContent: data.explicit_content.filter_enabled,
      })
    );
  } catch (error) {
    window.location.href = routes.error
  }
}

function* fetchUserTopArtistsWorker() {
  try {
    // @ts-ignore
    const response = yield getUserTopArtists();
    // @ts-ignore
    const data = yield response;
    yield put(
      spotifyDataActions.fetchUserTopArtistsSuccess({
        name: data.items.map((x: spotifyUserTopArtist) => x.name),
      })
    );
  } catch (error) {
    window.location.href = routes.error
  }
}

function* fetchAllTimeUserTopArtistsWorker() {
  try {
    // @ts-ignore
    const response = yield getAllTimeUserTopArtists();
    // @ts-ignore
    const data = yield response;
    yield put(
      spotifyDataActions.fetcAllTimeUserTopArtistsSuccess({
        name: data.items.map((x: spotifyUserTopArtist) => x.name),
      })
    );
  } catch (error) {
    window.location.href = routes.error
  }
}

function* fetchUserTopTracksWorker() {
  try {
    // @ts-ignore
    const response = yield getUserTopTracks();
    // @ts-ignore
    const data = yield response;
    const formatData = data.items.map((x: {name: string, artists: {name: string}[]}) => ({
      song: x.name,
      artist: x.artists[0].name,
    }));
    yield put(spotifyDataActions.fetchUserTopTracksSuccess(formatData));
  } catch (error) {
    window.location.href = routes.error
  }
}

function* fetchAllTimeUserTopTracksWorker() {
  try {
    // @ts-ignore
    const response = yield getAllTimeUserTopTracks();
    console.log('2')
    // @ts-ignore
    const data = yield response;
    const formatData = data.items.map((x: {name: string, artists: {name: string}[]}) => ({
      song: x.name,
      artist: x.artists[0].name,
    }));
    yield put(spotifyDataActions.fetchAllTimeUserTopTracksSuccess(formatData));
  } catch (error) {
    window.location.href = routes.error
  }
}

function* fetchUserPlaylistsWorker() {
  try {
    // @ts-ignore
    const response = yield getUserPlaylists();
    // @ts-ignore
    const data = yield response;
    const formatData = data.items.map((x: {name: string, images:{url: string}[]}) => ({
      name: x.name,
      imageUrl: x.images[0] ? x.images[0].url : null,
    }));
    yield put(spotifyDataActions.fetchUserPlaylistsSuccess(formatData));
  } catch (error) {
    window.location.href = routes.error
  }
}

export function* spotifyRefreshTokenWatcher() {
  yield takeLatest(
    spotifyDataActions.fetchRefreshToken.toString(),
    fetchRefreshTokenWorker
  );
}

export function* spotifyUserProfileWatcher() {
  yield takeLatest(
    spotifyDataActions.fetchUserProfile.toString(),
    fetchUserProfileWorker
  );
}

export function* spotifyUserTopArtistsWatcher() {
  yield takeLatest(
    spotifyDataActions.fetchUserTopArtists.toString(),
    fetchUserTopArtistsWorker
  );
}

export function* spotifyAllTimeUserTopArtistsWatcher() {
  yield takeLatest(
    spotifyDataActions.fetchAllTimeUserTopArtists.toString(),
    fetchAllTimeUserTopArtistsWorker
  );
}

export function* spotifyAllTimeUserTopTracksWatcher() {
  yield takeLatest(
    spotifyDataActions.fetchAllTimeUserTopTracks.toString(),
    fetchAllTimeUserTopTracksWorker
  );
}

export function* spotifyUserTopTracksWatcher() {
  yield takeLatest(
    spotifyDataActions.fetchUserTopTracks.toString(),
    fetchUserTopTracksWorker
  );
}

export function* spotifyUserPlaylistsWatcher() {
  yield takeLatest(
    spotifyDataActions.fetchUserPlaylists.toString(),
    fetchUserPlaylistsWorker
  );
}
