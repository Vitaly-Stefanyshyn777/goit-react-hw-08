import { createSelector } from "@reduxjs/toolkit";

export const selectContactsState = (state) => state.contacts || {};
export const selectContacts = (state) => selectContactsState(state).items ?? [];
export const selectError = (state) => selectContactsState(state).error ?? null;
export const selectIsLoading = (state) =>
  selectContactsState(state).isLoading ?? false;

export const selectFilterState = (state) => state.filters || {};
export const selectFilter = (state) =>
  selectFilterState(state).name?.trim().toLowerCase() || "";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;

    return contacts.filter(({ name = "", phone = "" }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(filter) || phone.includes(filter);
    });
  }
);
