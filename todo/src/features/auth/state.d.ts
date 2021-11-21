export interface AuthState {
    user: User;
    accessKey: string,
    loading: AuthLoading
}
export interface AuthLoading {
    post: {
        signIn: boolean
    }
}
export interface User {
    name: string;
    email: string;
    password: string;
}
