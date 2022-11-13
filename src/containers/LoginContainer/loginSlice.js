import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: null,
};

export const loginThunk = createAsyncThunk("users/login", async ({ username, password }) => {
  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
});

export const loginSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout(state) {
      state.id = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    });
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
