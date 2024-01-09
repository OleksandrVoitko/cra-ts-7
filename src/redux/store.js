import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./phoneBook/contacts";
import { filterReducer } from "./todoList/filterSlice";
import { tasksReducer } from "./todoList/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
