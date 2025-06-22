"use client";
import { ArrowUpRightIcon } from "lucide-react";
import { UseRevealer } from "@/hooks/useRevealer";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function page() {
  UseRevealer();
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
  return (
    <div className="relative z-10 flex flex-col h-full w-full pt-10 pb-48 md:py-20 px-5 md:px-16 justify-between text-start text-white font-careny">
      <p className="text-6xl md:text-5xl h-full tracking-wide animate-fadeInLeft">
        Fancy<sup>®</sup> <br className="block md:hidden" /> Microblading
      </p>
      <div className="flex flex-col md:flex-row justify-between h-full md:h-min items-center mb-10 md:ml-5">
        <p className="text-3xl md:text-7xl text-center md:text-start tracking-wide w-full animate-fadeInLeft">
          Arte en cada trazo, elegancia en tu rostro
        </p>
        <div className="w-full md:w-[70%] flex flex-col justify-center items-start">
          <p className="hidden md:block text-base md:text-lg tracking-wide w-full font-poppins mb-5 animate-fadeInRight">
            Donde cada trazo revela tu esencia. Cejas y pestañas que realzan tu
            belleza natural
          </p>

          <Link
            href="/menu"
            onClick={handleNavigation("/menu")}
            className="group flex justify-center items-center gap-2 border border-white/30 rounded-full ml-12 md:ml-5 px-4 py-2 text-3xl transition hover:-translate-y-1 duration-1000 animate-fadeInRight"
          >
            Agendar Cita{" "}
            <ArrowUpRightIcon
              size={32}
              className="bg-white text-black rounded-full p-1 transition-all group-hover:-rotate-[360deg] duration-700"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
