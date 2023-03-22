import { User } from "./user.model";

// structure of SignInRequest
export interface SignInRequest {
    userName: string;
    password: string;
}

// structure of SignInResponse
export interface SignInResponse {
    value: User;
    respItems: number;
    allItems: number;
    errors: string[];
    hasErrors: boolean;
}
