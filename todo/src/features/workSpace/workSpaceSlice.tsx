import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as types from 'types/workSpace'
import { initialState } from './initialState'
import { api } from './workSpaceApi'

export const getWorkSpaceAsync = createAsyncThunk<
  types.GetWorkSpaceResponse,
  types.GetWorkSpaceRequest,
  { rejectValue: { errorMessage: string } }
>('workSpace/get', async (data, thunkApi) => {
  const response = api
    .get(data)
    .then((res) => res.data)
    .catch((e) =>
      thunkApi.rejectWithValue({
        errorMessage: 'ワークスペースの取得に失敗しました',
      })
    )
  return response
})

export const createDashboardAsync = createAsyncThunk<
  types.CreateDashboardResponse,
  types.CreateDashboardRequest,
  { rejectValue: { errorMessage: string } }
>('workSpace/createDashboard', async (data, thunkApi) => {
  const response = api
    .createDashboard(data)
    .then((res) => res.data)
    .catch((e) =>
      thunkApi.rejectWithValue({
        errorMessage: 'ダッシュボードの作成に失敗しました',
      })
    )
  return response
})

export const workSpaceSlice = createSlice({
  name: 'workSpace',
  initialState,
  reducers: {
    getWorkSpaceId: (state, action: PayloadAction<{ workSpaceId: number }>) => {
      state.workSpace.id = action.payload.workSpaceId
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWorkSpaceAsync.fulfilled, (state, action) => {
        state.workSpace = action.payload.workSpace
        state.dashboards = action.payload.dashboards
      })
      .addCase(createDashboardAsync.pending, (state) => {
        state.loading.post.createDashboard = true
      })
      .addCase(createDashboardAsync.fulfilled, (state, action) => {
        state.loading.post.createDashboard = false
        state.dashboards = [...state.dashboards, action.payload.dashboard]
      })
      .addCase(createDashboardAsync.rejected, (state) => {
        state.loading.post.createDashboard = false
      })
  },
})

export const workSpaceReducer = workSpaceSlice.reducer

export const workSpaceAction = workSpaceSlice.actions
