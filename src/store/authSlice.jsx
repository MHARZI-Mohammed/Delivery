import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, isAuthentifier: false, isAdmin: false, errorMessage: null },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const adminEmail = "admin@gmail.com";
      const adminPassword = "adminpassword";
      if (email === adminEmail && password === adminPassword) {
        state.user = { email, role: "admin" };
        state.isAuthentifier = true;
        state.isAdmin = true; 
        state.errorMessage = null;
      } else if (email && password) {
        state.user = { email, role: "user" };
        state.isAuthentifier = true;
        state.isAdmin = false;
        state.errorMessage = null; 
      } else {
        state.errorMessage = "Email ou mot de passe incorrect.";
        state.isAuthentifier = false;
        state.isAdmin = false;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthentifier = false;
      state.isAdmin = false;
      state.errorMessage = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;