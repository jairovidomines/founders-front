import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "./types";

const initialState: UserState = {
  username: "",
  isLogged: false,
  token: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      token: action.payload.token,
      username: action.payload.username,
      isLogged: true,
      id: action.payload.id,
    }),
    logoutUser: (): UserState => ({ ...initialState }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
