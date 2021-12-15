import { IDashboard } from 'types/card'

export interface DashboardState {
  dashboard: IDashboard
  loading: DashboardLoading
}

export interface DashboardLoading {
  post: {
    create: boolean
    createCardList: boolean
    createCard: boolean
  }
}
