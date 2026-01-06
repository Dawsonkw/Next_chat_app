'use client';

import { useRouter } from 'next/router';
import React from 'react';



function Login() {
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            router.push('/');
        } else {
            alert('Login failed. Please check your credentials and try again.');
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="text-gray-800 text-3xl font-bold p-4 flex justify-center items-center">
                    Login Page
                </h1>  
                <div className="flex flex-col items-center justify-center gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email" 
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password" 
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;