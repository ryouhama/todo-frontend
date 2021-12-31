import { MockMethods, MockResponse } from 'axios-mock-server'
import { GetWorkSpaceResponse } from 'types/workSpace'

const signIn: MockMethods = {
  get: async (request): Promise<MockResponse> => {
    const response: GetWorkSpaceResponse = {
      workSpace: {
        id: 1,
        name: 'テスト太郎',
      },
      dashboards: [
        {
          id: 1,
          tittle: 'TODO',
          cardLists: [],
        },
      ],
    }
    return [200, response]
  },
}

export default signIn
