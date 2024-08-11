import { createSlice } from "@reduxjs/toolkit";
import axios from "../axiosConfig";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token") || null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      localStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.loading = false;
      localStorage.removeItem("token");
    },
    checkAuth(state) {
      const token = localStorage.getItem("token");
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
      } else {
        state.isAuthenticated = false;
        state.token = null;
      }
      state.loading = false;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    updateUser(state, action) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, logout, checkAuth, setUser, updateUser } =
  authSlice.actions;

export const fetchUserData = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.get("/api/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setUser(response.data));
  } catch (error) {
    console.error("Failed to fetch user data", error);
    dispatch(logout());
  }
};

export default authSlice.reducer;
