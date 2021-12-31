import { MockMethods, MockResponse } from 'axios-mock-server'
import { GetWorkSpaceResponse } from 'types/workSpace'

const signIn: MockMethods = {
  get: async (request): Promise<MockResponse> => {
    const userId = Number(request.values.userId)

    const response: GetWorkSpaceResponse = {
      workSpace: {
        id: userId,
        name: 'テスト太郎',
      },
    }
    return [200, response]
  },
}

export default signIn
