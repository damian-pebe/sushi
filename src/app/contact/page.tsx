"use client";
import { UseRevealer } from "@/hooks/useRevealer";
import React from "react";
import Image from "next/image";
import { MailCheckIcon, PhoneForwardedIcon, Store } from "lucide-react";

export default function ContactPage() {
  UseRevealer();
  return (
    <div className="flex flex-col justify-between items-center h-full w-full bg-black">
      <div className="revealer"></div>
      <div className="flex flex-col md:flex-row w-full h-full md:h-screen justify-between items-center">
        <Hero />
        <ContactInfoHero />
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
          src="/images/sushi4.jpg"
          alt="Contact Background"
          fill
          className="object-cover h-screen z-0 rounded-3xl"
        />
      </div>
      <Titles />
    </div>
  );
}
function ContactInfoHero() {
  return (
    <div className="relative w-[80vw] h-screen overflow-hidden border-black border-[16px]">
      <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-3xl" />
      <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
        <Image
          src="/images/sushi5.jpg"
          alt="Contact Background"
          fill
          className="object-cover h-screen z-0 rounded-3xl"
        />
      </div>

      <div className="relative z-[2] flex items-center justify-center h-full px-4 pointer-events-none">
        <ContactInfo />
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="w-full max-w-xl py-12 px-6 text-white border border-white/30 rounded-3xl backdrop-blur-sm bg-black/40 pointer-events-auto">
      <h2 className="text-3xl font-serif uppercase text-center tracking-wider mb-8">
        Contact Information
      </h2>
      <div className="space-y-6 text-sm text-gray-300">
        <div className="flex items-center gap-4">
          <i className="bi bi-geo-alt text-white text-lg"></i>
          <p>123 Sushi Street, Kuraby, QLD 4112, Australia</p>
        </div>
        <div className="flex items-center gap-4">
          <i className="bi bi-telephone text-white text-lg"></i>
          <p>+61 123 456 789</p>
        </div>
        <div className="flex items-center gap-4">
          <i className="bi bi-envelope text-white text-lg"></i>
          <p>contact@kurabysushi.com</p>
        </div>
        <div className="flex items-center gap-4">
          <i className="bi bi-instagram text-white text-lg"></i>
          <a
            href="https://instagram.com/kurabysushi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            @kurabysushi
          </a>
        </div>
        <div className="flex items-center gap-4">
          <i className="bi bi-facebook text-white text-lg"></i>
          <a
            href="https://facebook.com/kurabysushi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            facebook.com/kurabysushi
          </a>
        </div>
      </div>
    </div>
  );
}


function Titles() {
  return (
    <div className="relative z-[5px] flex flex-col h-full w-full pt-10 md:pt-24 md:py-10 px-5 justify-between text-start text-white font-careny">
      <p className="text-4xl md:text-5xl h-full tracking-wide animate-fadeInLeft">
        KURABY CONTACT
      </p>
      <div className="flex flex-col md:flex-row justify-between h-full md:h-min items-center mb-10 md:ml-5">
        <p className="text-2xl md:text-5xl text-center md:text-end tracking-wide w-full animate-fadeInLeft">
          Get in touch, follow us, or drop by anytime
        </p>
      </div>
    </div>
  );
}
