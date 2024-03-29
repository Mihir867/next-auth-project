"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error:any) {
      setError(true);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-8">Verify Email</h1>
      

      {verified && (
        <div>
          <h2 className="text-3xl">Email has been verified</h2>
          <Link href={"/signin"} className="text-black-600 hover:text-black-700 underline curser-pointer text-2xl">
            Visit SignIn page
          </Link>
        </div>
      )}
      {error && (
        <div>
          
          <h2 className="text-black-600 hover:text-black-700 text-2xl">Verification failed due to an Error</h2>
        </div>
      )}
    </div>
  );
}
