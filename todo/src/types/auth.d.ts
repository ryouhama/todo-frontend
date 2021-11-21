import { User } from "features/auth/authSlice";

// From Interface
export interface SignInForm {
    email: string,
    password: string,
}

// Request, Response Interface
export interface SignInRequest {
    data: SignInForm
}

export interface SignInResponse {
    user: User,
    accessToken: string
}

export interface ErrorSignIn {
    error: string
}