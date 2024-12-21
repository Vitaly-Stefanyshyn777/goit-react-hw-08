import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../auth/operations";

const handleApiError = (error, thunkAPI) => {
  return thunkAPI.rejectWithValue(
    error.response?.data?.message || error.message
  );
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitAPI.get("/contacts");
      return data;
    } catch (error) {
      return handleApiError(error, thunkAPI);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("/contacts", contact);
      return data;
    } catch (error) {
      return handleApiError(error, thunkAPI);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await goitAPI.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return handleApiError(error, thunkAPI);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/edit",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await goitAPI.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return handleApiError(error, thunkAPI);
    }
  }
);
