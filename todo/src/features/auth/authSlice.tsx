import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setAccessToken } from 'router/storage'
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from 'types/auth'
import { api } from './authAPI'
import { initialState } from './initial'

export const signInAsync = createAsyncThunk<
  SignInResponse,
  SignInRequest,
  { rejectValue: { errorMessage: string } }
>('auth/signIn', async (data, thunkApi) => {
  const response = await api
    .signIn(data)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      return thunkApi.rejectWithValue({ errorMessage: 'Auth Error: Sign In' })
    })
  return response
})

export const signUpAsync = createAsyncThunk<
  SignUpResponse,
  SignUpRequest,
  { rejectValue: { errorMessage: string } }
>('auth/signUp', async (data, thunkApi) => {
  const response = await api
    .signUp(data)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      return thunkApi.rejectWithValue({ errorMessage: 'Auth Error: Sign Up' })
    })
  return response
})

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
        setAccessToken({ accessToken: action.payload.accessToken })
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.loading.post.signIn = false
        console.log(action.payload?.errorMessage)
      })
      .addCase(signUpAsync.pending, (state) => {
        state.loading.post.signUp = true
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.loading.post.signUp = false
        state.user = action.payload.user
        setAccessToken({ accessToken: action.payload.accessToken })
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.loading.post.signUp = false
        console.log(action.payload?.errorMessage)
      })
  },
})

export default authSlice.reducer
