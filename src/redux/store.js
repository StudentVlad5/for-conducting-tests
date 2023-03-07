import { configureStore } from "@reduxjs/toolkit";
// import { filtersReducer } from './filterSlice';
// import { contactsReducer } from './contactsSlice';
import { authReducer } from "./auth/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "auth",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // contacts: contactsReducer,
    // filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
