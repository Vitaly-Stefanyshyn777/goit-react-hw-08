import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";

// Конфігурація persist для auth
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], // Зберігаємо лише токен
};

// Основна конфігурація store
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), // Persisted reducer
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE === "development", // DevTools для розробки
});

// Persistor для збереження стану у LocalStorage
export const persistor = persistStore(store);
