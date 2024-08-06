import { createSlice } from "@reduxjs/toolkit";
import { getSearchByTitle, getSearchByIngridients } from "./operations";

const initialState = {
  result: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "serachResult",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearchByTitle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchByTitle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.result = action.payload;
      })
      .addCase(getSearchByTitle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getSearchByIngridients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchByIngridients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.result = action.payload;
      })
      .addCase(getSearchByIngridients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const searchReducer = searchSlice.reducer;
