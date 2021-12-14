import { client } from 'features/api'
import {
  CreateDashboardRequest,
  CreateDashboardResponse,
  CreateCardListRequest,
  CreateCardListResponse,
} from 'types/card'

export const api = {
  createDashboard: (request: CreateDashboardRequest) =>
    client.post<CreateDashboardResponse>('/dashboard/', request.data),
  createCardLst: (request: CreateCardListRequest) =>
    client.post<CreateCardListResponse>(
      `/dashboard/${request.dashboardId}/cardList/`,
      request.data
    ),
}
