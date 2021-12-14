import { IUser } from 'types/user'

export interface AuthState {
  user: IUser
  loading: AuthLoading
}

export interface AuthLoading {
  post: {
    signIn: boolean
    signUp: boolean
  }
}
