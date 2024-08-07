import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getShoppingList, updateShoppingList } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [getShoppingList, updateShoppingList];

const getActions = (type) =>
  isAnyOf(...extraActions.map((action) => action[type]));

const getShoppingListFulfilledReducer = (state, action) => {
  state.shoppingList = action.payload;
};

const updateShoppingListFulfilledReducer = (state, action) => {
  state.shoppingList = action.payload;
};

const shoppingListAnyPendingReducer = (state) => {
  state.isLoading = true;
};

const shoppingListAnyFulfilledReducer = (state) => {
  state.isLoading = false;
  state.error = null;
};

const shoppingListAnyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getShoppingList.fulfilled, getShoppingListFulfilledReducer)
      .addCase(updateShoppingList.fulfilled, updateShoppingListFulfilledReducer)
      .addMatcher(getActions("pending"), shoppingListAnyPendingReducer)
      .addMatcher(getActions("rejected"), shoppingListAnyRejectedReducer)
      .addMatcher(getActions("fulfilled"), shoppingListAnyFulfilledReducer),
});

export const shoppingListReducer = shoppingListSlice.reducer;
