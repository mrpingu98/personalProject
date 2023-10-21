import { getSpotifyUserProfile } from "./getUserPersonalData";
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
