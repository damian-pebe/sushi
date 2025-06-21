import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/sushi.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50 animate-fadeInDown h-screen"
        />
      </div>
    </div>
  );
}
