"use client";
import Link from "next/link";
import React from "react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Navbar() {
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
    <div className="flex justify-between items-center bg-[#FAFAFA] text-black p-6 shadow-2xl z-50 font-serif">
      <Link
        href="/"
        onClick={handleNavigation("/")}
        className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
      >
        SUSHI
      </Link>
      <div className="flex gap-2">
        <Link
          href="/who"
          onClick={handleNavigation("/who")}
          className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
        >
          Sushi Store
        </Link>
        <Link
          href="/menu"
          onClick={handleNavigation("/menu")}
          className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
        >
          Menu
        </Link>
        <Link
          href="/contact"
          onClick={handleNavigation("/contact")}
          className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
        >
          Contact us
        </Link>
      </div>
      <div className="cursor-pointer transform hover:-translate-y-0.5 transition-all duration-500">
        GDL, Mexico
      </div>
    </div>
  );
}
