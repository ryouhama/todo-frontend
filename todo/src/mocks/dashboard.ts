import { MockMethods, MockResponse } from 'axios-mock-server'
import * as types from 'types/card'

const createDashboard: MockMethods = {
  post: async (request): Promise<MockResponse> => {
    const response: types.CreateDashboardResponse = {
      dashboard: {
        id: 1,
        tittle: request.data.tittle,
        cardLists: [],
      },
    }
    return [200, response]
  },
}

export default createDashboard
