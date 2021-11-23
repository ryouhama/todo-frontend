export interface AuthState {
	user: User;
	accessToken: string,
	loading: AuthLoading
}
export interface AuthLoading {
	post: {
		signIn: boolean
		signUp: boolean

	}
}
export interface User {
	name: string;
	email: string;
	password: string;
}
