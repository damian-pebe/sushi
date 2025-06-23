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
import { OpenSheetBlack } from "./components/ui/open";
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
    <div className="flex justify-between items-center bg-[#FAFAFA] text-black px-6 py-3 rounded-b-3xl z-50 font-careny">
      <Link
        href="/"
        onClick={handleNavigation("/")}
        className="transform hover:-translate-y-0.5 hover:tracking-widest transition-all duration-500"
      >
        SUSHI KURABY
      </Link>
      <div className="hidden md:flex gap-4">
        <Link
          href="/who"
          onClick={handleNavigation("/who")}
          className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
        >
          ABOUT
        </Link>
        <Link
          href="/menu"
          onClick={handleNavigation("/menu")}
          className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
        >
          MENU
        </Link>
        <Link
          href="/contact"
          onClick={handleNavigation("/contact")}
          className="border-b hover:border-black/50 border-[#FAFAFA] transform hover:-translate-y-0.5 transition-all duration-500"
        >
          GET IN TOUCH
        </Link>
      </div>
      <div className="hidden md:block cursor-pointer transform hover:-translate-y-0.5 transition-all duration-500">
        GDL, Mexico
      </div>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <OpenSheetBlack />
          </SheetTrigger>
          <SheetContent className="w-full sm:w-[540px] rounded-l-3xl text-white border-[#1C1C1C] bg-[#1C1C1C]">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
