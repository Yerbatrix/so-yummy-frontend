import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

export const addOwnRecipe = createAsyncThunk(
  "add/own-recipes",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("api/recipes/", credentials);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
