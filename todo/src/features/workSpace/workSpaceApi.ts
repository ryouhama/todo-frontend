import { client } from 'features/api'
import * as types from 'types/workSpace'

export const api = {
  get: (request: types.GetWorkSpaceRequest) =>
    client.get<types.GetWorkSpaceResponse>(`workSpace/${request.workSpaceId}/`),
  createDashboard: (request: types.CreateDashboardRequest) =>
    client.post<types.CreateDashboardResponse>(
      `workSpace/${request.workSpaceId}/dashboard/`,
      request.data
    ),
}
