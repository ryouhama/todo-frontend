import { User } from 'features/auth/authSlice'
import { IUser } from './user'

// Interface
export interface LocalStorage {
  accessToken: string
}

// From Interface
export interface SignInForm {
  email: string
  password: string
}

export interface SignUpForm {
  name: string
  email: string
  password: string
}

// Request, Response Interface
export interface SignInRequest {
  data: SignInForm
}

export interface SignInResponse {
  user: User
  accessToken: string
  workSpaceId: number
}

export interface SignUpRequest {
  data: SignUpForm
}

export interface SignUpResponse extends SignInResponse {}

export interface GetUserResponse {
  user: IUser
  workSpaceId: number
}

export interface SignUpError {
  error: string
}
