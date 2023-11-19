/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getSpotifyUserProfile } from "./getUserPersonalData";
import { getUserPlaylists } from "./getUserPlayslists";
import { getUserTopArtists } from "./getUserTopArtists";
import { getUserTopTracks } from "./getUserTopTracks";
import { refreshToken } from "./refreshToken";
import { spotifyDataActions } from "./state";
import { takeLatest, put } from "redux-saga/effects";

function* fetchRefreshTokenWorker() {
  try {
    yield refreshToken();
    yield put(spotifyDataActions.fetchRefreshTokenSuccess());
  } catch (error) {
    throw new Error("Error" + error);
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
    throw new Error("Error" + error);
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
        name: data.items.map((x: any) => x.name),
      })
    );
  } catch (error) {
    throw new Error("Error" + error);
  }
}

function* fetchUserTopTracksWorker() {
  try {
    // @ts-ignore
    const response = yield getUserTopTracks();
    // @ts-ignore
    const data = yield response;
    const formatData = data.items.map((x: any) => ({
      song: x.name,
      artist: x.artists[0].name,
    }));
    yield put(spotifyDataActions.fetchUserTopTracksSuccess(formatData));
  } catch (error) {
    throw new Error("Error" + error);
  }
}

function* fetchUserPlaylistsWorker() {
  try {
    // @ts-ignore
    const response = yield getUserPlaylists();
    // @ts-ignore
    const data = yield response;
    const formatData = data.items.map((x: any) => ({
      name: x.name,
      imageUrl: x.images[0] ? x.images[0].url : null,
    }));
    yield put(spotifyDataActions.fetchUserPlaylistsSuccess(formatData));
  } catch (error) {
    throw new Error("Error" + error);
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
