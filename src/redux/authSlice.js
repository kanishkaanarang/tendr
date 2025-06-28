import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signupUser, loginUser, logoutUser, verifyOtp, resendOtp, getUserProfile } from '../apis';

export const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
  try {
    const response = await signupUser(userData);
    return { ...response, userData };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginUser(credentials);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const response = await logoutUser();
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const verifyOtpAction = createAsyncThunk('auth/verifyOtp', async ({ phoneNumber, name, email, otp, verificationId }, { rejectWithValue }) => {
  try {
    const response = await verifyOtp({ phoneNumber, name, email, otp, verificationId });
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const resendOtpAction = createAsyncThunk('auth/resendOtp', async (_, { getState, rejectWithValue }) => {
  try {
    const { auth } = getState();
    const { phoneNumber, name, email, password } = auth.userData || {};
    if (!phoneNumber || !name || !email || !password) {
      throw new Error("Missing user data for resending OTP");
    }
    const response = await resendOtp({ phoneNumber, name, email, password });
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (_, { getState, rejectWithValue }) => {
  try {
    const { auth } = getState();
    const token = auth.token;
    if (!token) {
      throw new Error("No token found");
    }
    const response = await getUserProfile(token);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    verificationId: null,
    userData: null,
    profile: null, // Add profile to state
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationId = action.payload.verificationId;
        state.userData = action.payload.userData;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.consumer;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.verificationId = null;
        state.userData = null;
        state.profile = null; // Clear profile on logout
      })
      .addCase(verifyOtpAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtpAction.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationId = null;
        state.userData = null;
      })
      .addCase(verifyOtpAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resendOtpAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendOtpAction.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationId = action.payload.verificationId;
      })
      .addCase(resendOtpAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload; // Store profile data
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;