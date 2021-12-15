import { client } from 'features/api'
import {
  CreateDashboardRequest,
  CreateDashboardResponse,
  CreateCardListRequest,
  CreateCardListResponse,
  CreateCardRequest,
  CreateCardResponse,
} from 'types/card'

export const api = {
  createDashboard: (request: CreateDashboardRequest) =>
    client.post<CreateDashboardResponse>('/dashboard/', request.data),
  createCardLst: (request: CreateCardListRequest) =>
    client.post<CreateCardListResponse>(
      `/dashboard/${request.dashboardId}/cardList/`,
      request.data
    ),
  createCard: (request: CreateCardRequest) =>
    client.post<CreateCardResponse>(
      `/dashboard/${request.dashboardId}/cardList/${request.cardListId}/cards/`,
      request.data
    ),
}
