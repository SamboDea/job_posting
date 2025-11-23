import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // Signup values
    valueSignUp: {
      fullName: "",
      email: "",
      password: "",
      comfirmedPassword: "",
    },

    // Verify email
    valueVerify: {
      email: "",
      verificationCode: "",
    },

    // Resend verification
    valueResend: {
      email: "",
    },

    // Login
    valueLogin: {
      email: "",
      password: "",
    },

    // ---------------- NEW (USER + TOKEN) ----------------
    user: null,
    accessToken: null,
    refreshToken: null,

    loading: false,
  },

  reducers: {
    // SIGN UP
    setSignUp(state, action) {
      state.valueSignUp = action.payload;
    },
    clearSignUp(state) {
      state.valueSignUp = {
        fullName: "",
        email: "",
        password: "",
        comfirmedPassword: "",
      };
    },

    // VERIFY
    setVerify(state, action) {
      state.valueVerify = action.payload;
    },
    clearVerify(state) {
      state.valueVerify = {
        email: "",
        verificationCode: "",
      };
    },

    // RESEND VERIFY
    setResend(state, action) {
      state.valueResend = action.payload;
    },
    clearResend(state) {
      state.valueResend = {
        email: "",
      };
    },

    // LOADING
    setLoading(state, action) {
      state.loading = action.payload;
    },

    // LOGIN
    setLogin(state, action) {
      state.valueLogin = action.payload;
    },
    clearLogin(state) {
      state.valueLogin = {
        email: "",
        password: "",
      };
    },

    // ---------------- SAVE USER DATA ----------------
    setUser(state, action) {
      state.user = action.payload;
    },

    // Save token
    setToken(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    // Logout
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const {
  setSignUp,
  clearSignUp,
  setVerify,
  clearVerify,
  setResend,
  clearResend,
  setLogin,
  clearLogin,
  setLoading,
  setUser,
  setToken,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
