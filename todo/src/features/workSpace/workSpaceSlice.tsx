import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'

export const workSpaceSlice = createSlice({
  name: 'workSpace',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export const workSpaceReducer = workSpaceSlice.reducer
