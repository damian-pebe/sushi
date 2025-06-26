"use client";
import { UseRevealer } from "@/hooks/useRevealer";
import React from "react";
import Image from "next/image";

export default function page() {
  UseRevealer();
  return (
    <div className="flex flex-col justify-between items-center h-full w-full bg-black">
      <div className="revealer"></div>
      <div className="flex flex-row w-full h-screen justify-between items-center">
        <Hero />
        <div className="hidden md:block">
          <About />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden border-black border-[16px]">
      <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-3xl" />

      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Image
          src="/images/sushi2.jpg"
          alt="Background"
          fill
          className="object-cover h-screen z-0 rounded-3xl"
        />
      </div>
                <Titles />

    </div>
  );
}

function About() {
  return (
    <div className="relative z-[5px] flex flex-col h-full w-full items-end px-4 md:px-16 py-10 text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-7xl">
        <div className="flex flex-col justify-center bg-white/10 p-8 rounded-lg">
          <h1 className="text-base md:text-xl font-serif uppercase tracking-wide leading-snug">
            Sushi Artistry
            <br />
            Redefined
          </h1>
          <p className="mt-2 text-gray-300 text-xs md:text-sm leading-relaxed">
            Where culinary craftsmanship meets modern elegance. Indulge in the
            finest sushi, expertly curated to elevate your dining experience.
          </p>
        </div>

        <div className="group w-full h-full relative rounded-lg overflow-hidden hover:cursor-pointer">
          <Image
            src="/images/woman-sushi.jpg"
            alt="Woman Dining"
            fill
            className="object-cover rounded-3xl group-hover:scale-105 overflow-hidden transition-all duration-1000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 w-full max-w-6xl text-center">
        <div className="bg-white/10 p-6 rounded-md">
          <p className="text-xl mb-1">★★★★★</p>
          <h3 className="font-semibold uppercase text-lg">Trip Advisor</h3>
          <p className="text-gray-400 text-sm mt-1">Best Sushi</p>
        </div>
        <div className="bg-white/10 p-6 rounded-md">
          <p className="text-xl mb-1">★★★★★</p>
          <h3 className="font-semibold uppercase text-lg">Michelin Guide</h3>
          <p className="text-gray-400 text-sm mt-1">Quality Food</p>
        </div>
        <div className="bg-white/10 p-6 rounded-md">
          <p className="text-xl mb-1">★★★★★</p>
          <h3 className="font-semibold uppercase text-lg">Start Dining</h3>
          <p className="text-gray-400 text-sm mt-1">Cool Vibe</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 w-full max-w-7xl h-full">
        <div className="group relative w-full h-full rounded-lg overflow-hidden hover:cursor-pointer">
          <Image
            src="/images/chef-sushi.jpg"
            alt="Chef Cooking"
            fill
            className="object-cover rounded-3xl group-hover:scale-105 overflow-hidden transition-all duration-1000"
          />
        </div>

        <div className="bg-white/10 p-8 rounded-lg flex flex-col justify-center">
          <h2 className="text-xl font-serif uppercase mb-2 tracking-wide text-center md:text-left">
            Our Story
          </h2>
          <p className="text-gray-300 text-xs leading-relaxed text-center md:text-left">
            Founded with a passion for culinary excellence, Qitchen’s journey
            began in the heart of Prague. Over years, it evolved into a haven
            for sushi enthusiasts, celebrated for its artful mastery and
            devotion to redefining gastronomy.
          </p>
        </div>
      </div>
    </div>
  );
}

function Titles() {
  return (
    <div className="relative z-[5x] flex flex-col h-full w-full pt-10 md:pt-24 md:py-10 px-5 justify-between text-start text-white font-careny">
      <p className="text-4xl md:text-5xl h-full tracking-wide animate-fadeInLeft">
        ABOUT KURABY
      </p>
      <div className="flex flex-col md:flex-row justify-between h-full md:h-min items-center mb-10 md:ml-5">
        <p className="text-2xl md:text-5xl text-center md:text-end tracking-wide w-full animate-fadeInLeft">
          Rooted in tradition, driven by creativity — this is the story behind our sushi.
        </p>
      </div>
    </div>
  );
}
