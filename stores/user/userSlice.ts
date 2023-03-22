// store reducer from redux toolkit
// store user id, login, token, tokenExpirationTime

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/models/user.model";

interface UserState {
    id: string;
    login: string;
    token: string;
    tokenExpirationTime: number;
}

const initialState: UserState = {
    id: "",
    login: "",
    token: "",
    tokenExpirationTime: 0,
};

// set local storage token
const setToken = (token: string) => {
    localStorage.setItem("token", token);
}

// set local storage tokenExpirationTime
const setTokenExpirationTime = (tokenExpirationTime: number) => {
    localStorage.setItem("tokenExpirationTime", tokenExpirationTime.toString());
}

// set local storage user id
const setId = (id: string) => {
    localStorage.setItem("id", id);
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // set user id, login, token, tokenExpirationTime
        signInUser(state, action: PayloadAction<User>) {
            state.id = action.payload.id;
            state.login = action.payload.login;
            state.token = action.payload.token;
            state.tokenExpirationTime = action.payload.tokenExpirationTime;
            setToken(action.payload.token);
            setTokenExpirationTime(action.payload.tokenExpirationTime);
            setId(action.payload.id);
        }
    }
});

export const { signInUser } = userSlice.actions;
export default userSlice.reducer;
