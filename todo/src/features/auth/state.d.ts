import { User } from 'types/user'

export interface AuthState {
  user: User
  loading: AuthLoading
}

export interface AuthLoading {
  post: {
    signIn: boolean
    signUp: boolean
  }
}
