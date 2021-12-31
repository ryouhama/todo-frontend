import { MockMethods, MockResponse } from 'axios-mock-server'
import { GetUserResponse } from 'types/auth'

const signIn: MockMethods = {
  get: async (): Promise<MockResponse> => {
    const response: GetUserResponse = {
      user: {
        id: 1,
        name: 'テスト太郎',
        email: 'hogehoge@example.com',
      },
      workSpaceId: 1,
    }
    return [200, response]
  },
}

export default signIn
