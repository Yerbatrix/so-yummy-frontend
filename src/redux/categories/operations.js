import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosConfig";

export const getCategoryList = createAsyncThunk(
  "categories/getCategoryList",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/recipes/category-list/`);
      return data.data.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
