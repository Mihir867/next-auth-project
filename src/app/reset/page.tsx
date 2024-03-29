"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

export default function Reset() {
    const [password, setPassword] = useState('');
    const [cPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const token = searchParams.get('token');
        if (token) {
            setToken(token);
        }
        console.log(token)
    }, []);

    const handleReset = async (e:any) => {
        e.preventDefault();

        if (password !== cPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post("/api/users/reset", { token, password , cPassword});
            
            console.log(response);
            toast.success(response.data.message);
        } catch (error) {
            setError('An error occurred while processing your request');
            console.log(error)
        }
    };

    return (
        <div className="max-w-md mx-auto flex flex-col items-center justify-center min-h-screen py-2 px-4">
            <h2 className='mb-8 text-4xl'>Password Reset</h2>
            <form onSubmit={handleReset}>
                <div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='input-field'
                        placeholder='New Password'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={cPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className='input-field'
                        placeholder='Confirm New Password'
                    />
                </div>
                
                <button type="submit" className='button-style mt-6'>Reset Password</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
