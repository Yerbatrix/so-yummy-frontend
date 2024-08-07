import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

export const getShoppingList = createAsyncThunk(
  "shoppingList/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/ingredients/list/`);
      return data.data.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateShoppingList = createAsyncThunk(
  "shoppingList/updateShoppingList",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.put(`api/ingredients/list/`, credentials);
      return data.updatedList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
