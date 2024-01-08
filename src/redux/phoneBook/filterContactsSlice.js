import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const filterContactsSlice = createSlice({
  name: "filterContacts",
  initialState: initialState.phoneBook.filter,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterContactsSlice.actions;
export const filterContactsReducer = filterContactsSlice.reducer;
