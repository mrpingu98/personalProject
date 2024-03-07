import { combineReducers } from "@reduxjs/toolkit";
import { spotifyDataSlice } from "./SpotifyAPI/state";

export const rootReducer = combineReducers ({
    spotifyData: spotifyDataSlice.reducer
});

export type AppState = ReturnType<typeof rootReducer>

//creating a type AppState that represents the Redux state tree 
//can then reference this type to refer to the Redux state tree, as we can't reference using rootReducer directly 
//so basically just like an intermediary definition for TypeScript purposes