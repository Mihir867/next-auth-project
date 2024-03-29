"use client"
import axios from "axios"
import React, {useEffect} from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {toast} from "react-hot-toast"

export default function Signup(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        name :"",
        email:"",
        number:"",
        password:"" 
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    useEffect(() => {
      if(user.name.length>0 && user.email.length>0 && user.number.length>0 && user.password.length>0){
          setButtonDisabled(false);
      }else{
          setButtonDisabled(true);
      }
    }, [user])
    

    const onSign= async()=>{
        try {
            const response = await axios.post("/api/users/signup", user)
            console.log(response.data)
            toast.success("User signed up succesfully")
            router.push("/signin")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-4xl text-gray-900">
              Sign up for an account
            </h2>
          </div>
          <form className="mt-10 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder="Enter your Name"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Enter your Email address"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="number" className="sr-only">
                  Contact Number
                </label>
                <input
                  id="number"
                  type="text"
                  value={user.number}
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                  placeholder="Enter your Phone Number"
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
            <div>
              <button
                className="button-style"
                onClick={onSign}
                disabled={buttonDisabled}
              >
                {buttonDisabled ? "Please fill in all the details" : "Signup"}
              </button>
            </div>
          </form>
          <Link href="/signin" className="text-black-600 hover:text-black-700 underline curser-pointer">Visit the Login page</Link>
        </div>
      </div>
    );
  }