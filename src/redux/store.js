import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./phoneBook/contactsSlice";
import { filterContactsReducer } from "./phoneBook/filterContactsSlice";
import { filterReducer } from "./todoList/filterSlice";
import { tasksReducer } from "./todoList/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
    contacts: contactsReducer,
    filterContacts: filterContactsReducer,
  },
});
