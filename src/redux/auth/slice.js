import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./operations";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || "An error occurred";
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, () => initialState)
      .addMatcher(isAnyOf(login.pending, register.pending), handlePending)
      .addMatcher(isAnyOf(login.fulfilled, register.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(login.rejected, register.rejected), handleRejected);
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
