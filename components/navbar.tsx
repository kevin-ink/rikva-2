"use client";

import Link from "next/link";
import { useState } from "react";
import Flyout from "./flyout";

export default function Navbar() {
  const [flyout, setFlyout] = useState(0);

  const handleFlyout = (x: number) => {
    setFlyout(x);
  };

  return (
    <div
      onMouseLeave={() => setFlyout(0)}
      className={`h-auto w-full font-maven-pro text-sky-100 transition-all fixed z-10 ${
        flyout > 0 ? "bg-sky-800/90" : "bg-sky-700/80"
      }`}
    >
      <div className="h-11 w-full flex flex-row justify-between items-center">
        <div className="flex-1 flex flex-row justify-start">
          <Link
            href="/"
            className="peer text-2xl/6 font-bold peer-hover:text-white hover:text-white ml-5 "
          >
            R
          </Link>
          <div className="peer text-base/7 font-bold text-right w-0 overflow-hidden transition-all duration-200 hover:w-[38px] text-white peer-hover:w-[38px]">
            IKVA
          </div>
        </div>
        <div className="w-fit flex flex-row justify-around items-center">
          <Link
            href="/data"
            className="navlink"
            onMouseEnter={() => handleFlyout(200)}
          >
            Data
          </Link>
          <Link href="/narrative" className="navlink">
            Narrative
          </Link>
          <Link href="/about" className="navlink">
            About
          </Link>
        </div>
        <div className="flex-1"></div>
      </div>
      <Flyout height={flyout} />
    </div>
  );
}
