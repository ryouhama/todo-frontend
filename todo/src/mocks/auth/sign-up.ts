import { MockMethods, MockResponse } from 'axios-mock-server'
import { SignUpRequest, SignUpResponse } from 'types/auth'

const signIn: MockMethods = {
  post: async (request: SignUpRequest): Promise<MockResponse> => {
    const response: SignUpResponse = {
      user: {
        id: 1,
        name: request.data.name,
        email: request.data.email,
      },
      accessToken: 'hogehoge',
      workSpaceId: 1,
    }
    return [200, response]
  },
}

export default signIn
