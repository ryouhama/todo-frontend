import { client } from 'features/api'
import { SignInRequest, SignInResponse } from 'types/auth';

export const api = {
  signIn: (request: SignInRequest) => client.post<SignInResponse>('/auth/sign-in/', request.data)
}
