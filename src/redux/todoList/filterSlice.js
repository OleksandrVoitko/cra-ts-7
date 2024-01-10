import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    status: statusFilters.all,
  },
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
