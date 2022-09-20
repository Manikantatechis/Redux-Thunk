import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { default as userApi, default as UserApi } from '../../service/userApi';
import { initialState } from './initialState';

export const signIn = createAsyncThunk(
  'users/signin',
  async ({ email, password }) => {
    try {
      const response = await UserApi.signin(email, password);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const signUp = createAsyncThunk(
  'users/signup',
  async ({ email, password, name }, _) => {
    try {
      const response = await userApi.signup(email, password, name);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.profile = payload.data;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(signIn.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = 'Network Error';
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (payload.status === 400) {
        state.profile = {};
        state.success = false;
        state.error = payload.data.email[0];
      } else {
        state.profile = payload.data;
        state.success = true;
        state.error = null;
      }
    });
    builder.addCase(signUp.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = 'Network Error';
    });
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
