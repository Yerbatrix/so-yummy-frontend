import { createSlice } from "@reduxjs/toolkit";
import { getIngredientsList } from "./operations";

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredientsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingredients = action.payload;
      })
      .addCase(getIngredientsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Poprawiona literówka
      });
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
