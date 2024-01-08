import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: initialState.todoList.filters,
  reducers: {
    setStatusFilter: {
      reducer(state, action) {
        state.status = action.payload;
      },
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
