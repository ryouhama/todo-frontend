import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteAccessToken, setAccessToken } from 'router/storage'
import {
  GetUserResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from 'types/auth'
import { api } from './authAPI'
import { initialState, initialUser } from './initialState'

export const signInAsync = createAsyncThunk<
  SignInResponse,
  { data: SignInRequest; onSuccess: (workSpaceId: number) => void },
  { rejectValue: { errorMessage: string } }
>('auth/signIn', async ({ data, onSuccess }, thunkApi) => {
  const response = await api
    .signIn(data)
    .then((res) => {
      return res.data
    })
    .then((data) => {
      onSuccess(data.workSpaceId)
      return data
    })
    .catch((e) =>
      thunkApi.rejectWithValue({ errorMessage: 'Auth Error: Sign In' })
    )
  return response
})

export const signUpAsync = createAsyncThunk<
  SignUpResponse,
  { data: SignUpRequest; onSuccess: (workSpaceId: number) => void },
  { rejectValue: { errorMessage: string } }
>('auth/signUp', async ({ data, onSuccess }, thunkApi) => {
  const response = await api
    .signUp(data)
    .then((res) => {
      return res.data
    })
    .then((data) => {
      onSuccess(data.workSpaceId)
      return data
    })
    .catch((e) => {
      return thunkApi.rejectWithValue({ errorMessage: 'Auth Error: Sign Up' })
    })
  return response
})

export const getUserAsync = createAsyncThunk<
  GetUserResponse,
  { onSuccess: (workSpaceId: number) => void },
  { rejectValue: { errorMessage: string } }
>('auth/getUser', async ({ onSuccess }, thunkApi) => {
  const response = await api
    .getUser()
    .then((res) => res.data)
    .then((data) => {
      onSuccess(data.workSpaceId)
      return data
    })
    .catch((e) =>
      thunkApi.rejectWithValue({ errorMessage: 'Auth Error: Sign Up' })
    )
  return response
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = initialUser
      deleteAccessToken()
      window.location.href = '/todo-frontend/auth'
    },
  },
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
      .addCase(signInAsync.rejected, (state) => {
        state.loading.post.signIn = false
      })
      .addCase(signUpAsync.pending, (state) => {
        state.loading.post.signUp = true
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.loading.post.signUp = false
        state.user = action.payload.user
        setAccessToken({ accessToken: action.payload.accessToken })
      })
      .addCase(signUpAsync.rejected, (state) => {
        state.loading.post.signUp = false
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
  },
})

export const authReducer = authSlice.reducer
export const { signOut } = authSlice.actions
