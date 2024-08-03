import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getCategoryList } from "./operations";

const initialState = {
  categoryList: [],
  isLoading: false,
  error: null,
};

const extraActions = [getCategoryList];

const getActions = (type) =>
  isAnyOf(...extraActions.map((action) => action[type]));

const getCategoryListFulfilledReducer = (state, action) => {
  state.categoryList = action.payload;
};

const categoriesAnyPendingReducer = (state) => {
  state.isLoading = true;
};

const categoriesAnyFulfilledReducer = (state) => {
  state.isLoading = false;
  state.error = null;
};

const categoriesAnyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCategoryList.fulfilled, getCategoryListFulfilledReducer)
      .addMatcher(getActions("pending"), categoriesAnyPendingReducer)
      .addMatcher(getActions("rejected"), categoriesAnyRejectedReducer)
      .addMatcher(getActions("fulfilled"), categoriesAnyFulfilledReducer),
});

export const categoriesReducer = categoriesSlice.reducer;
