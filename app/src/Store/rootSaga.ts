import { fork } from 'redux-saga/effects';
import { spotifyRefreshTokenWatcher, spotifyUserProfileWatcher} from "./SpotifyAPI/effects";

function* rootSaga() {
    yield fork (spotifyRefreshTokenWatcher)
    yield fork (spotifyUserProfileWatcher)
}
export {rootSaga}

//something about a generator body (using the *)
//this is where you store all the generator functions? same way you store the reducers all together 