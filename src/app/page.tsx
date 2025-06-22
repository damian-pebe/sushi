"use client"
import { useRevealer } from "@/hooks/useRevealer";
import React from "react";
import Image from "next/image";

export default function page() {
  useRevealer()
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <div className="revealer"></div>
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      <div className="absolute inset-0">
        <Image
          src="/images/sushi.jpg"
          alt="Background"
          fill
          className="object-cover h-screen z-0"
        />
      </div>
      <Titles />
    </div>
  );
}

function Titles() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
        Welcome to Sushi World
      </h1>
      <p className="text-lg md:text-xl text-white text-center mt-4">
        Experience the best sushi in town!
      </p>
    </div>
  );
}
