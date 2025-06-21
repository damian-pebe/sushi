import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#FAFAFA] text-black p-6 shadow-2xl">
      <Link
        href="/"
        className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
      >
        SUSHI
      </Link>
      <div className="flex gap-2">
        <Link
          href="/who"
          className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
        >
          Sushi Store
        </Link>
        <Link
          href="/menu"
          className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
        >
          Menu
        </Link>
        <Link
          href="/contact"
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
