import { client } from 'features/api'
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from 'types/auth'

export const api = {
  signIn: (request: SignInRequest) =>
    client.post<SignInResponse>('/auth/sign-in/', request.data),
  signUp: (request: SignUpRequest) =>
    client.post<SignUpResponse>('/auth/sign-up/', request.data),
}
