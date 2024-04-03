import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null); 
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);



  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };
  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
  };

  const handleMouseEnter1 = () => {
    setIsDropdownOpen1(true);
  };
  const handleMouseEnter2 = () => {
    setIsDropdownOpen2(true);
  };
  const handleMouseEnter3 = () => {
    setIsDropdownOpen3(true);
  };
  const handleMouseEnter4 = () => {
    setIsDropdownOpen4(true);
  };

  const handleMouseLeave1 = () => {
    setIsDropdownOpen1(false);
  };
  const handleMouseLeave2 = () => {
    setIsDropdownOpen2(false);
  };
  const handleMouseLeave3 = () => {
    setIsDropdownOpen3(false);
  };
  const handleMouseLeave4 = () => {
    setIsDropdownOpen4(false);
  };

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
    <div className="flex items-center justify-between p-4 border-b border-gray-400 shadow-lg ">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-9 w-10 mr-2" />
        <div className="text-2xl">TalentForge</div>
      </div>
      <div className="flex justify-between">
    <div className="flex">
        <div className="nav-item relative" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <a href="#" className="text-black px-5 py-2 hover:bg-gray-200 rounded-lg" style={{ fontSize: '18px' }}>Candidates</a>
            {isDropdownOpen1 && (
            <div className="absolute z-10 bg-white rounded-lg shadow-lg mt-2 py-2 px-5 w-48">
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 1</a>
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 2</a>
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 3</a>
            </div>
          )}
        </div>
        <div className="nav-item relative" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <a href="#" className="text-black px-5 py-2 hover:bg-gray-200 rounded-lg" style={{ fontSize: '18px' }}>Tests</a>
            {isDropdownOpen2 && (
            <div className="absolute z-10 bg-white rounded-lg shadow-lg mt-2 py-2 px-5 w-48">
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 1</a>
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 2</a>
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 3</a>
            </div>
          )}
        </div>
        <div className="nav-item relative" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            <a href="#" className="text-black px-5 py-2 hover:bg-gray-200 rounded-lg" style={{ fontSize: '18px' }}>Results</a>
            {isDropdownOpen3 && (
            <div className="absolute z-10 bg-white rounded-lg shadow-lg mt-2 py-2 px-5 w-48">
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 1</a>
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 2</a>
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 3</a>
            </div>
          )}
        </div>
        <div className="nav-item relative" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
            <a href="#" className="text-black px-5 py-2 hover:bg-gray-200 rounded-lg" style={{ fontSize: '18px' }}>Settings</a>
            {isDropdownOpen4 && (
            <div className="absolute z-10 bg-white rounded-lg shadow-lg mt-2 py-2 px-5 w-48 fade-down">
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 1</a>
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 2</a>
              <a href="#" className="block py-2 px-2 hover:bg-gray-200 rounded-lg">Option 3</a>
            </div>
          )}
        </div>
        
    </div>
</div>



      {userData ? (
        <div className="flex items-center">
          <h1 className="mr-4 bold" style={{ fontSize: '20px' }}>{userData.name}</h1>
          <button onClick={logout} className="btn-secondary bg-blue-500 mr-5 p-2 rounded-lg bg-[#4CCD99]">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex">
          <button onClick={signup} className="btn-secondary bg-blue-500 mr-5 p-2 rounded-lg bg-[#4CCD99]">
            Sign Up
          </button>
          <button onClick={signin} className="btn-primary bg-blue-500 mr-5 p-2 rounded-lg bg-[#4CCD99]">
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
