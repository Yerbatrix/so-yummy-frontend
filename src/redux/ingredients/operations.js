import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIngredientsList = createAsyncThunk(
  "ingredients/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/ingredients");
      return data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
