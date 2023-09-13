import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UsernameState {
    userName: string;
};

export const initialState: UsernameState = {
    userName: ''
};

const userNameSlice = createSlice({
    name: 'Username',
    initialState,
    reducers: {
        updateUsername(state: UsernameState, action: PayloadAction<string>) {
            state.userName = action.payload
        }
    }
})

const userNameActions = userNameSlice.actions;

export {userNameSlice, userNameActions}