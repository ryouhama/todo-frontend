import { AuthLoading, AuthState } from './state'
import { IUser } from 'types/user'

export const initialUser: IUser = {
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
