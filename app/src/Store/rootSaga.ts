import { fork } from 'redux-saga/effects';
import { spotifyRefreshTokenWatcher, spotifyUserPlaylistsWatcher, spotifyUserProfileWatcher, spotifyUserTopArtistsWatcher, spotifyUserTopTracksWatcher, spotifyAllTimeUserTopArtistsWatcher,
    spotifyAllTimeUserTopTracksWatcher
} from "./SpotifyAPI/effects";

function* rootSaga() {
    yield fork (spotifyRefreshTokenWatcher)
    yield fork (spotifyUserProfileWatcher)
    yield fork (spotifyUserTopArtistsWatcher)
    yield fork (spotifyUserTopTracksWatcher)
    yield fork (spotifyUserPlaylistsWatcher)
    yield fork (spotifyAllTimeUserTopArtistsWatcher)
    yield fork (spotifyAllTimeUserTopTracksWatcher)
}
export {rootSaga}