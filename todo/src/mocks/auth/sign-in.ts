import { MockMethods, MockResponse } from 'axios-mock-server';
import { SignInRequest, SignInResponse } from 'types/auth'

const signIn: MockMethods = {
  post: async (request: SignInRequest): Promise<MockResponse> => {
    const response: SignInResponse = {
      user: {
        name: 'テスト太郎',
        email: request.data.email,
        password: request.data.password
      },
      accessToken: 'hogehoge'
    }
    console.log('response', response)
    return [200, response]
  }
}

export default signIn