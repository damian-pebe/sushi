"use client";
import { ArrowUpRightIcon, ChevronRight } from "lucide-react";
import { UseRevealer } from "@/hooks/useRevealer";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function page() {
  UseRevealer();
  return (
    <div className="flex flex-col justify-between items-center h-full w-full bg-black">
      <div className="revealer"></div>
      <div className="flex flex-row w-full h-screen justify-between items-center">
        <Hero />
        <div className="hidden md:block">
          <HeroNavigation />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-[100vw] md:w-[70vw] h-screen overflow-hidden border-black border-[16px]">
      <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-3xl" />

      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Image
          src="/images/sushi.jpg"
          alt="Background"
          fill
          className="object-cover h-screen z-0 rounded-3xl"
        />
      </div>
      <Titles />
    </div>
  );
}
function HeroNavigation() {
  const router = useTransitionRouter();
  const pathname = usePathname();

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation =
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (path === pathname) e.preventDefault();

      router.push(path, {
        onTransitionReady: triggerPageTransition,
      });
    };

  const navimap = [
    {
      href: "/who",
      image: "sushi5",
      label: "ABOUT",
    },
    {
      href: "/menu",
      image: "sushi2",
      label: "MENU",
    },
    {
      href: "/contact",
      image: "sushi3",
      label: "GET IN TOUCH",
    },
  ];
  return (
    <div className="relative w-[33vw] h-screen overflow-hidden border-black border-y-[16px] border-r-[16px]">
      <div className="flex flex-col justify-between items-center h-full w-full relative text-white font-careny text-xl">
        {navimap.map((nav) => (
          <Link
            href={nav.href}
            key={nav.href}
            onClick={handleNavigation(nav.href)}
            className="relative w-full h-[34vh] rounded-3xl overflow-hidden mb-4 group "
          >
            <Image
              src={`/images/${nav.image}.jpg`}
              alt="Background 1"
              fill
              className="object-cover rounded-3xl group-hover:scale-105 overflow-hidden transition-all duration-1000"
            />

            <div className="transform duration-1000 hover:-translate-y-0.5 hover:cursor-pointer absolute bottom-4 right-4 bg-black/80 px-4 py-2 flex items-center gap-2 rounded-tl-xl rounded-br-xl">
              <span className="text-white text-sm tracking-wider">
                {nav.label}
              </span>
              <div className="w-6 h-6 rounded-full border border-white/30 group-hover:bg-white/10 flex items-center justify-center transition-all duration-700">
                <ChevronRight className="text-white w-4 h-4 group-hover:rotate-[360deg] transition-all duration-700" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Titles() {
  return (
    <div className="relative z-[5x] flex flex-col h-full w-full pt-10 md:pt-24 md:py-10 px-5 justify-between text-start text-white font-careny">
      <p className="text-4xl md:text-5xl h-full tracking-wide animate-fadeInLeft">
        KURABY SUSHI RESTAURANT
      </p>
      <div className="flex flex-col md:flex-row justify-between h-full md:h-min items-center mb-10 md:ml-5">
        <p className="text-2xl md:text-5xl text-center md:text-end tracking-wide w-full animate-fadeInLeft">
          Tradición japonesa, elegancia contemporánea{" "}
        </p>
      </div>
      <div className="group hover:cursor-pointer flex justify-center items-center gap-2 border border-white/30 rounded-full mx-10 mb-5 md:mx-24 md:ml-5 px-4 py-2 text-xl md:text-3xl transition hover:-translate-y-1 duration-1000 animate-fadeInRight">
        Ver Menú{" "}
        <ArrowUpRightIcon className="bg-white text-black rounded-full p-1 transition-all group-hover:-rotate-[360deg] duration-700" />
      </div>
    </div>
  );
}
