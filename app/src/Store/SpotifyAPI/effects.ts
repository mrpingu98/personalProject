import { getUserPersonalData } from "./getUserPersonalData";
import { refresh } from "./refresh";
import { spotifyDataActions } from "./state";
import { takeLatest, put } from "redux-saga/effects";

function* fetchRefreshTokenWorker() {
  try {
        yield refresh()
        yield put(spotifyDataActions.fetchRefreshTokenSuccess())
  } catch(error) {
    console.log(error)
  }
}

function* fetchUserPersonalDataWorker() {
  try {
    // @ts-ignore
    const response = yield getUserPersonalData();
    // @ts-ignore
    const data = yield response;
    yield put(
      spotifyDataActions.fetchUserPersonalDataSuccess({
        name: data.display_name,
        email: data.email,
        image: data.images[1].url,
        country: data.country,
        followers: data.followers.total,
        explicitContent: data.explicit_content.filter_enabled,
      })
    );
  } catch (error){
    // console.log('Error:', error)
  }
}
export function* spotifyRefreshTokenWatcher () {
  yield takeLatest(spotifyDataActions.fetchRefreshToken.toString(), fetchRefreshTokenWorker);
}

export function* spotifyUserPersonalDataWatcher() {
  yield takeLatest(spotifyDataActions.fetchUserPersonalData.toString(),fetchUserPersonalDataWorker);
}
