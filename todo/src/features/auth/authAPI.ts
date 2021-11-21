import axios from 'axios'
import { SignInRequest, SignInResponse } from 'types/auth';

export const api = {
  signIn: (request: SignInRequest) => axios.post<SignInResponse>('URL', request.data)
}