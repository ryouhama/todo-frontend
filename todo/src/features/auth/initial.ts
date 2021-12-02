import { AuthLoading, AuthState } from './state'
import { User } from 'types/user'

export const initialUser: User = {
  id: -1,
  name: '',
  email: '',
}

export const initialLoading: AuthLoading = {
  post: {
    signIn: false,
    signUp: false,
  },
}

export const initialState: AuthState = {
  user: initialUser,
  loading: initialLoading,
}
