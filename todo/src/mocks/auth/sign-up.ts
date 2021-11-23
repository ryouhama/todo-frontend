import { MockMethods, MockResponse } from 'axios-mock-server';
import { SignUpRequest, SignUpResponse } from 'types/auth'

const signIn: MockMethods = {
  post: async (request: SignUpRequest): Promise<MockResponse> => {
    const response: SignUpResponse = {
      user: {
        name: request.data.name,
        email: request.data.email,
        password: request.data.password
      },
      accessToken: 'hogehoge'
    }
    return [200, response]
  }
}

export default signIn