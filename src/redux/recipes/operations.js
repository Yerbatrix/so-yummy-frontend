import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addOwnRecipe = createAsyncThunk(
  "add/own-recipes",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/recipes", credentials);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
