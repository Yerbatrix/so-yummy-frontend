import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosConfig";

export const getIngredientsList = createAsyncThunk(
  "ingredients/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("api/ingredients/");
      return data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
