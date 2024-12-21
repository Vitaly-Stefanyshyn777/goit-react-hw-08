// ;

// export const selectUser = (state) => state.auth.user;
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectIsRefreshing = (state) => state.auth.isRefreshing;

// export const selectIsError = (state) => state.auth.error;
// export const selectIsLoading = (state) => state.auth.isLoading;
// // export const selectUserName = createSelector([selectUser], (user) => user.name);

// Селектори для авторизації
import { createSelector } from "@reduxjs/toolkit";

// Базові селектори
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => selectAuth(state)?.user ?? null;
export const selectToken = (state) => selectAuth(state)?.token ?? null;
export const selectIsRefreshing = (state) =>
  selectAuth(state)?.isRefreshing ?? false;
export const selectIsLoadingAuth = (state) =>
  selectAuth(state)?.isLoading ?? false;
export const selectAuthError = (state) => selectAuth(state)?.error ?? null;

// Комбінований селектор: статус автентифікації
export const selectUserAuthStatus = createSelector(
  [selectToken, selectIsRefreshing],
  (token, isRefreshing) => !!token && !isRefreshing
);

// export const selectUserAuthStatus = createSelector(
//   [selectToken, selectIsRefreshing],
//   (token, isRefreshing) => !!token && !isRefreshing
// );
