"use client";
import Link from "next/link";
import React from "react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { OpenSheetWhite } from "./components/ui/open";
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
    <div className="absolute top-1/4 left-32 flex items-center bg-black text-white px-4 py-2 rounded-full z-50 font-careny gap-4 w-full md:w-fit shadow-md border border-white/10">
      <Sheet>
        <SheetTrigger className="hover:cursor-pointer ml-auto bg-transparent border border-white/20 hover:bg-white/10 transition text-sm px-4 py-2 rounded-lg">
          <OpenSheetWhite />
        </SheetTrigger>
        <SheetContent className="w-full sm:w-[540px] rounded-l-3xl text-white border-white/30 bg-black">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Link
        href="/"
        onClick={handleNavigation("/")}
        className="text-2xl tracking-widest font-careny text-white hover:text-white transition-all"
      >
        KURABY
      </Link>

      <div className="hidden md:flex gap-6 ml-6 text-sm tracking-wide">
        <Link
          href="/menu"
          onClick={handleNavigation("/menu")}
          className="hover:text-gray-300 transition"
        >
          MENU
        </Link>
        <Link
          href="/who"
          onClick={handleNavigation("/who")}
          className="hover:text-gray-300 transition"
        >
          ABOUT
        </Link>
      </div>

      <Link
        href="/contact"
        onClick={handleNavigation("/contact")}
        className="ml-auto bg-transparent border border-white/20 hover:bg-white hover:text-black transition text-sm px-4 py-2 rounded-lg"
      >
        GET IN TOUCH
      </Link>
    </div>
  );
}
