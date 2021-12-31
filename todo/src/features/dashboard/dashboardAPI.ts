import { client } from 'features/api'
import {
  CreateCardListRequest,
  CreateCardListResponse,
  CreateCardRequest,
  CreateCardResponse,
} from 'types/card'

export const api = {
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
