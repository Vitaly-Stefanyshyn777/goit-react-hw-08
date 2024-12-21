// import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { logOut } from "../auth/operations";
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   editContact,
// } from "./operations";

// const handlePending = (state) => {
//   console.log("Pending state triggered");
//   state.isLoading = true;

// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(logOut.fulfilled, (state) => {
//         state.items = [];
//         state.error = null;
//         state.isLoading = false;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         console.log("Fetch Contacts Fulfilled:", action.payload);
//         state.items = action.payload;
//         state.isLoading = false;
//         state.error = null;
//       })

//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })

//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(
//           (item) => item.id !== action.payload.id,
//         );
//       })

//       .addCase(editContact.fulfilled, (state, action) => {
//         const index = state.items.findIndex(
//           (item) => item.id === action.payload.id,
//         );
//         if (index !== -1) {
//           state.items[index] = action.payload;
//         }
//         state.error = null;
//         state.isLoading = false;
//       })

//       .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           addContact.pending,
//           deleteContact.pending,
//           editContact.pending,
//         ),
//         handlePending,
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           deleteContact.rejected,
//           editContact.rejected,
//         ),
//         handleRejected,
//       );
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

// Початковий стан контактів
const initialState = {
  items: [], // Список контактів
  isLoading: false, // Індикатор завантаження
  error: null, // Зберігання помилки
  isContactsFetched: false, // Індикатор завантаження контактів
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      // ====== FETCH CONTACTS ======
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isContactsFetched = true;
      })

      // ====== ADD CONTACT ======
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })

      // ====== DELETE CONTACT ======
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
      })

      // ====== LOG OUT ======
      .addCase(logOut.fulfilled, () => initialState)

      // ====== COMMON PENDING STATE ======
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )

      // ====== COMMON REJECTED STATE ======
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload || "Something went wrong";
        }
      )

      // ====== COMMON FULFILLED STATE ======
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
