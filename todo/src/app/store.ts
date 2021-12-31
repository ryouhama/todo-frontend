import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import { authReducer } from 'features/auth/authSlice'
import { dashboardReducer } from 'features/dashboard/dashboardSlice'
import { workSpaceReducer } from 'features/workSpace/workSpaceSlice'

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
    workSpace: workSpaceReducer,
  }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
