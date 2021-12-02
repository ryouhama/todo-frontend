import { MockMethods, MockResponse } from 'axios-mock-server'
import { SignInRequest, SignInResponse } from 'types/auth'

const signIn: MockMethods = {
  post: async (request: SignInRequest): Promise<MockResponse> => {
    const response: SignInResponse = {
      user: {
        id: 1,
        name: 'テスト太郎',
        email: request.data.email,
      },
      accessToken: 'hogehoge',
    }
    return [200, response]
  },
}

export default signIn
