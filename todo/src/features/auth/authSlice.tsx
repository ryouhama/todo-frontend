import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignInRequest, SignInResponse } from 'types/auth';
import { api } from './authAPI'
import { initialState } from './initial'

export const signInAsync = createAsyncThunk<
  SignInResponse,
  SignInRequest,
  { rejectValue: { errorMessage: string } }
>(
  'auth/signIn',
  async (data, thunkApi) => {
    const response = await api.signIn(data)
      .then((res) => {
        return res.data
      }).catch(e => {
        return thunkApi.rejectWithValue({ errorMessage: 'Auth Error' })
      })
    return response
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.loading.post.signIn = true
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.loading.post.signIn = false
        state.user = action.payload.user
        state.accessKey = action.payload.accessToken
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.loading.post.signIn = false
        console.log(action.payload?.errorMessage)
      });
  },
});

export default authSlice.reducer;