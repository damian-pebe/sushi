"use client";
import { UseRevealer } from "@/hooks/useRevealer";
import React, { useState } from "react";
import Image from "next/image";

export default function page() {
  UseRevealer();
  return (
    <div className="flex flex-col justify-between items-center h-full w-full bg-black">
      <div className="revealer"></div>
      <div className="flex flex-col md:flex-row w-full h-full md:h-screen justify-between items-center">
        <Hero />
          <SushiMenu />
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
          src="/images/sushi3.jpg"
          alt="Background"
          fill
          className="object-cover h-screen z-0 rounded-3xl"
        />
      </div>
      <Titles/>
    </div>
  );
}

const menu = {
  MAKI: [
    {
      name: "Spicy Tuna Maki",
      desc: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      price: "$5",
      img: "/images/sushi.jpg",
    },
    {
      name: "Mango Maki",
      desc: "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
      price: "$5",
      img: "/images/sushi2.jpg",
    },
    {
      name: "Salmon Maki",
      desc: "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
      price: "$5",
      img: "/images/sushi3.jpg",
    },
    {
      name: "Tuna Maki",
      desc: "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
      price: "$5",
      img: "/images/sushi4.jpg",
    },
  ],
  URAMAKI: [
    {
      name: "Spicy Tuna Maki",
      desc: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      price: "$5",
      img: "/images/sushi.jpg",
    },
    {
      name: "Mango Maki",
      desc: "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
      price: "$5",
      img: "/images/sushi2.jpg",
    },
    {
      name: "Tuna Maki",
      desc: "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
      price: "$5",
      img: "/images/sushi4.jpg",
    },
    {
      name: "Salmon Maki",
      desc: "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
      price: "$5",
      img: "/images/sushi3.jpg",
    },
  ],
  "SPECIAL ROLLS": [
    {
      name: "Salmon Maki",
      desc: "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
      price: "$5",
      img: "/images/sushi3.jpg",
    },
    {
      name: "Tuna Maki",
      desc: "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
      price: "$5",
      img: "/images/sushi4.jpg",
    },
    {
      name: "Spicy Tuna Maki",
      desc: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      price: "$5",
      img: "/images/sushi.jpg",
    },
    {
      name: "Mango Maki",
      desc: "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
      price: "$5",
      img: "/images/sushi2.jpg",
    },
  ],
};

function SushiMenu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menu>("MAKI");

  return (
    <div className="w-full py-12 px-4 text-white border border-white/30 rounded-3xl">
      {/* Tabs */}
      <div className="flex gap-4 justify-center mb-8">
        {Object.keys(menu).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as keyof typeof menu)}
            className={`hover:bg-white hover:text-black transition-all duration-700 hover:cursor-pointer border border-gray-500 px-4 py-1 text-sm rounded-full uppercase tracking-wider ${
              activeTab === key
                ? "bg-white text-black"
                : "bg-transparent"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-3xl font-serif uppercase text-center tracking-wider mb-6">
        {activeTab}
      </h2>

      {/* Menu Items */}
      <div className="space-y-8">
        {menu[activeTab].map((item, index) => (
         <div
  key={index}
  className="flex flex-col md:flex-row items-center md:items-start gap-6"
>
  <div className="relative w-32 h-24 rounded overflow-hidden mx-auto md:mx-0">
    <Image
      src={item.img}
      alt={item.name}
      fill
      className="object-cover"
    />
  </div>
  <div className="flex-1">
    <div className="flex justify-between items-center border-b border-gray-600 pb-1 mb-1">
      <h3 className="text-lg font-semibold uppercase">{item.name}</h3>
      <span className="text-sm text-gray-300">{item.price}</span>
    </div>
    <p className="text-sm text-gray-400">{item.desc}</p>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}

function Titles() {
  return (
    <div className="relative z-[5x] flex flex-col h-full w-full pt-10 md:pt-24 md:py-10 px-5 justify-between text-start text-white font-careny">
      <p className="text-4xl md:text-5xl h-full tracking-wide animate-fadeInLeft">
        KURABY SUSHI MENU
      </p>
      <div className="flex flex-col md:flex-row justify-between h-full md:h-min items-center mb-10 md:ml-5">
        <p className="text-2xl md:text-5xl text-center md:text-end tracking-wide w-full animate-fadeInLeft">
          A curated menu of handcrafted sushi, made with the finest ingredients
        </p>
      </div>
      
    </div>
  );
}