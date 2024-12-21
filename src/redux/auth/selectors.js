import { createSelector } from "@reduxjs/toolkit";

export const selectAuth = (state) => state.auth;
export const selectUser = (state) => selectAuth(state)?.user ?? null;
export const selectToken = (state) => selectAuth(state)?.token ?? null;
export const selectIsRefreshing = (state) =>
  selectAuth(state)?.isRefreshing ?? false;
export const selectIsLoadingAuth = (state) =>
  selectAuth(state)?.isLoading ?? false;
export const selectAuthError = (state) => selectAuth(state)?.error ?? null;

export const selectUserAuthStatus = createSelector(
  [selectToken, selectIsRefreshing],
  (token, isRefreshing) => !!token && !isRefreshing
);
