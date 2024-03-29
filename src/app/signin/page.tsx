"use client"
import axios from "axios";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Signin() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(true); 
    const [error, setError] = React.useState("");

    useEffect(() => { 
        setButtonDisabled(!(user.email && user.password));
    }, [user]);

    const onlog = async () => {
        try {
            const response = await axios.post("/api/users/signin", user);
            toast.success("Login Success");
            await router.push("/");
        } catch (error) {
            setError("Invalid email or password"); 
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-4xl text-gray-900">
                        Login Page
                    </h2>
                </div>
                <form className="mt-10 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="text"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                placeholder="Enter your email address"
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                placeholder="Enter your password"
                                className="input-field"
                            />
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>} 
                    <div>
                        <button
                            className="button-style"
                            onClick={onlog}
                            disabled={buttonDisabled}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="flex justify-between">
                    <Link href="/signup" className="text-black-600 hover:text-black-700 underline cursor-pointer">Create an Account</Link>
                    <Link href="/forgot" className="text-black-600 hover:text-black-700 underline cursor-pointer">Forgot Password</Link>
                </div>
            </div>
        </div>
    );
}
