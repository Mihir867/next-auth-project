import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null); // Explicitly define type as any

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const signin = () => {
    router.push("/signin");
  };

  const signup = () => {
    router.push("/signup");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUserData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-400 shadow-lg">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-12 mr-2" />
        <div className="text-3xl">TalentForge</div>
      </div>
      {userData ? (
        <div className="flex items-center">
          <h1 className="mr-4 text-xl">{userData.name}</h1>
          <button onClick={logout} className="btn-secondary bg-blue-500 mr-5 p-2 rounded-lg">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex">
          <button onClick={signup} className="btn-secondary bg-blue-500 mr-5 p-2 rounded-lg">
            Sign Up
          </button>
          <button onClick={signin} className="btn-primary bg-blue-500 mr-5 p-2 rounded-lg">
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
