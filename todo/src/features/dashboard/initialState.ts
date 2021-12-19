import { DashboardLoading, DashboardState } from './state'
import { IDashboard } from 'types/card'

const initialDashboardState: IDashboard = {
  id: -1,
  tittle: '',
  cardLists: [],
}

const initialLoading: DashboardLoading = {
  post: {
    create: false,
    createCardList: false,
    createCard: false,
  },
}

export const initialState: DashboardState = {
  dashboard: initialDashboardState,
  loading: initialLoading,
}
