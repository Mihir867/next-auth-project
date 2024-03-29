"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const forgotPasswordHandler = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/forgot", { email });
      toast.success("Password reset link has been sent to your email!");
      router.push("/signin");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Ensure loading state is reset even if there's an error
    }
  };

  return (
    <div className="max-w-md mx-auto flex flex-col items-center justify-center min-h-screen py-2 px-4">
      <>
        <h1 className="mb-8 text-4xl">Forgot Password</h1>
        <hr />
        <form onSubmit={forgotPasswordHandler} className="flex flex-col w-full">
          <input
            className="w-full p-2 border text-black border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please Enter your registered Email address"
          />
          <button className="w-full p-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-gray-600 bg-blue-300">
            Send Email
          </button>
        </form>
        <p>
          Back to{" "}
          <Link href="/signin" className="underline cursor-pointer">
            Login
          </Link>{" "}
        </p>
      </>
    </div>
  );
}
