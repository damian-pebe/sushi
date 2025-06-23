import { useState } from "react";

function XCloseWhite() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-full h-full flex justify-center items-center p-3 hover:cursor-pointer transition-all duration-1000"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`absolute flex justify-center items-center w-5 h-0.5 bg-white transform transition-all duration-1000 ${
          isHover ? "rotate-0" : "-rotate-45"
        }`}
      />
      <div
        className={`absolute justify-center items-center w-5 h-0.5 bg-white transform transition-all duration-1000 ${
          isHover ? "rotate-0" : "rotate-45"
        }`}
      />
    </div>
  );
}

function XCloseBlack() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="w-full h-full flex justify-center items-center p-3 hover:cursor-pointer transition-all duration-1000"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`absolute flex justify-center items-center w-5 h-0.5 bg-black transform transition-all duration-1000 ${
          isHover ? "rotate-0" : "-rotate-45"
        }`}
      />
      <div
        className={`absolute justify-center items-center w-5 h-0.5 bg-black transform transition-all duration-1000 ${
          isHover ? "rotate-0" : "rotate-45"
        }`}
      />
    </div>
  );
}

export { XCloseWhite, XCloseBlack };
