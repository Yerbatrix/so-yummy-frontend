import { createSlice } from "@reduxjs/toolkit";
import { deleteIngrFromShoppingList, getShoppingList } from "./operations";

const initialState = {
  items: [],
  deletedProductId: null,
  isLoading: false,
  error: null,
};

const shoppingList = createSlice({
  name: "shoppingList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getShoppingList.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.deletedProductId = [];
        state.isLoading = false;
      })
      .addCase(getShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteIngrFromShoppingList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteIngrFromShoppingList.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.deletedProductId = null;
        state.isLoading = false;
      })
      .addCase(deleteIngrFromShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const shoppingListReducer = shoppingList.reducer;
