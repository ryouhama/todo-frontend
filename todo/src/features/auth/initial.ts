import { User, AuthLoading, AuthState } from './state'

export const initialUser: User = {
    name: '',
    email: '',
    password: ''
}

export const initialLoading: AuthLoading = {
    post: {
        signIn: false,
        signUp: false
    }
}

export const initialState: AuthState = {
    user: initialUser,
    accessToken: '',
    loading: initialLoading
};
