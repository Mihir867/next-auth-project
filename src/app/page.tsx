"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState("");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setData(res.data.data.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router]);

  return (
    <div>
      <h1>{data ? data : "user"}</h1>
      <button onClick={logout} className="bg-blue-500 mt-5 py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
}
