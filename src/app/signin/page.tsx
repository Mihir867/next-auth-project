"use client"
import axios from "axios"
import React ,{useEffect} from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {toast} from "react-hot-toast"

export default function Signin(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:"" 
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    useEffect(() => {
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
      }, [user])
    
    const onlog= async()=>{
        try {
            const response = await axios.post("/api/users/signin", user)
            toast.success("Login Success")
            router.push("/")
        } catch (error) {
        }
    }
    return (
        <div className="flex flex-col items-center justify-center in-h-screen py-10">
            <h1 className="text-3xl">Login Page</h1>
            <hr />

            <label htmlFor="name"> Email address</label>
            <input id="email" type="text" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})} placeholder="Enter your Email address"></input>

            <label htmlFor="name"> Password</label>
            <input id="password" type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})} placeholder="Enter your password"></input>

            <button className="p-2 border border-gray-300 rounded-lg mb-4" onClick={onlog}>
                Login
            </button>
            <Link href="/signup">Visit the Signup page</Link>
        </div>
    )

}