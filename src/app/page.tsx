"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "@/Components/footer";
import FeaturesBlocks from "@/Components/FeaturesB";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import Testimonials from "@/Components/testimonials";

export default function Home() {
  

  return (
    
    <div >
     <Navbar />
     <Hero />
     <Features />
     <FeaturesBlocks />
     <Testimonials />
     <Footer />
    </div>
  );
}
