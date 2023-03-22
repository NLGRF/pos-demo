// SignIn Page with Formik and userSlice

import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../stores/user/userSlice';
import { RootState } from '../stores/store';
import { useRouter } from 'next/router';
import { SignInRequest, SignInResponse } from '@/models/auth.model';
import { useSignIn } from '@/hooks/useSignIn';

// if user is logged in, redirect to home page
// input userName and password
// if user is not logged in, redirect to sign in page
// input userName and password and submit form SignInRequest, SignInResponse

const SignIn = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const user  = useSelector((state: RootState) => state.user);
    const { signIn } = useSignIn();
    
    const initialValues: SignInRequest = {
        userName: '',
        password: '',
    };

    // if have token on local storage, redirect to home page with useEffect
    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/');
        }
    }, []);
    
    const onSubmit = async (values: SignInRequest) => {
        // response type is SignInResponse
        // console.log("values", values);
        
        const response = await signIn(values);
        // dispatch action signIn with payload is response type is User
        dispatch(signInUser(response!.value));
        // if response is success, redirect to home page
        if (response) {
            router.push('/');
        }

        
    }
    
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="bg-white rounded-lg shadow-xl p-10">
                <h1 className="text-3xl font-bold mb-10 text-black">Sign In</h1>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    <Form>
                        <div className="mb-5">
                            <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
                            <Field id="userName" name="userName" placeholder="User Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <ErrorMessage name="userName" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <Field id="password" name="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <ErrorMessage name="password" />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default SignIn;
