import { createSlice } from "@reduxjs/toolkit";
import { checkFavorite, addToFavorite, deleteFavorite } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(checkFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(checkFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
