"use client";

import Link from "next/link";
import { useState } from "react";
import Flyout from "./flyout";
import NavLink from "./navlink";

export default function Navbar() {
  const [flyout, setFlyout] = useState(0);

  const handleFlyout = (x: number) => {
    setFlyout(x);
  };

  return (
    <div
      onMouseLeave={() => setFlyout(0)}
      className={`h-auto w-full font-maven-pro text-sky-100 transition-all fixed z-50 ${
        flyout > 0 ? "bg-sky-800/90" : "bg-sky-700/80"
      }`}
    >
      <div className="h-11 w-full flex flex-row justify-between items-center">
        <div className="flex-1 flex flex-row justify-start">
          <div className="group flex">
            <Link
              href="/"
              className="text-2xl/6 font-bold hover:text-white group-hover:text-white ml-5"
            >
              R
            </Link>
            <div className="cursor-default group-hover:w-[38px] hover:w-[38px] text-base/7 font-bold text-right w-0 overflow-hidden transition-all duration-200 text-white">
              IKVA
            </div>
          </div>
        </div>
        <div className="w-fit flex flex-row justify-around items-center">
          <NavLink
            href="/"
            text="Introduction"
            onMouseEnter={() => handleFlyout(200)}
          />
          <NavLink
            href="/data"
            text="Data"
            onMouseEnter={() => handleFlyout(200)}
          />
          <NavLink
            href="/narrative"
            text="Narrative"
            onMouseEnter={() => handleFlyout(200)}
          />
          <NavLink
            href="/about"
            text="About"
            onMouseEnter={() => handleFlyout(200)}
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <Flyout height={flyout} />
    </div>
  );
}
