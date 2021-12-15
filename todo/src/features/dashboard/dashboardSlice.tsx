import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as types from 'types/card'
import { api } from './dashboardAPI'
import { initialState } from './initial'

export const createDashboardAsync = createAsyncThunk<
  types.CreateDashboardResponse,
  types.CreateDashboardRequest,
  { rejectValue: { errorMessage: string } }
>('dashboard/create', async (data, thunkApi) => {
  const response = await api
    .createDashboard(data)
    .then((res) => res.data)
    .catch((e) => {
      return thunkApi.rejectWithValue({
        errorMessage: 'ダッシュボードの作成に失敗しました',
      })
    })
  return response
})

export const createCardAsync = createAsyncThunk<
  types.CreateCardResponse,
  types.CreateCardRequest,
  { rejectValue: { errorMessage: string } }
>('dashboard/createCard', async (data, thunkApi) => {
  const response = await api
    .createCard(data)
    .then((res) => res.data)
    .catch((e) => {
      return thunkApi.rejectWithValue({
        errorMessage: 'カードの作成に失敗しました',
      })
    })
  return response
})

export const createCardLstAsync = createAsyncThunk<
  types.CreateCardListResponse,
  types.CreateCardListRequest,
  { rejectValue: { errorMessage: string } }
>('dashboard/createCardList', async (data, thunkApi) => {
  const response = await api
    .createCardLst(data)
    .then((res) => res.data)
    .catch((e) => {
      return thunkApi.rejectWithValue({
        errorMessage: 'カードリストの作成に失敗しました',
      })
    })
  return response
})

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createDashboardAsync.pending, (state) => {
        state.loading.post.create = true
      })
      .addCase(createDashboardAsync.fulfilled, (state, action) => {
        state.loading.post.create = false
        state.dashboard = action.payload.dashboard
      })
      .addCase(createDashboardAsync.rejected, (state) => {
        state.loading.post.create = false
      })
      .addCase(createCardLstAsync.pending, (state) => {
        state.loading.post.createCardList = true
      })
      .addCase(createCardLstAsync.fulfilled, (state, action) => {
        state.loading.post.createCardList = false
        state.dashboard.cardLists = [
          ...state.dashboard.cardLists,
          action.payload.cardList,
        ]
      })
      .addCase(createCardLstAsync.rejected, (state) => {
        state.loading.post.createCardList = false
      })
      .addCase(createCardAsync.pending, (state) => {
        state.loading.post.createCard = true
      })
      .addCase(createCardAsync.fulfilled, (state, action) => {
        state.loading.post.createCard = false
        const targetCardListIndex = state.dashboard.cardLists.findIndex(
          (cardList) => cardList.id === action.meta.arg.cardListId
        )
        state.dashboard.cardLists[targetCardListIndex].cards = [
          ...state.dashboard.cardLists[targetCardListIndex].cards,
          action.payload.card,
        ]
      })
      .addCase(createCardAsync.rejected, (state) => {
        state.loading.post.createCard = false
      })
  },
})

export default dashboardSlice.reducer
