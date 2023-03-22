// axios fetches data from the API post request
// params: userName, password
// endpoint: https://apis.baanbaan.co/api/user/Login
// args: userName, password
// returns: user data

import { useState } from "react";
import { SignInRequest, SignInResponse } from "../models/auth.model";
import { httpClient } from "@/services/httpClient";
import { useAppDispatch } from "@/stores/store";

// set Type for SignInRequest, SignInResponse, error
export const useSignIn = () => {
    const [user, setUser] = useState<SignInResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);
    
    // signIn function
    const signIn = async (args: SignInRequest) => {
        try {
        const { data } = await httpClient.post<SignInResponse>(
            "/user/Login",
            args
        );
        // console.log("data", data);
        setUser(data);
        // console.log("user", user);
        return data;
        } catch (error) {
        if (error instanceof Error) {
            // ✅ TypeScript knows error is Error
            console.log(error.message);
            setError(error);
        } else {
            console.log('Unexpected error', error);
        }
        }
    };
    // console.log("user before re", user);
    return { user, error, signIn };
}
