"use client";
import Image from "next/image";
import { Hero } from "../components/Hero";
import { Navbar } from "@/components/Navbar";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CallToAction />
    </div>
  );
}
