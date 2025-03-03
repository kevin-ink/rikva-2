"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Flyout from "./flyout";
import NavLink from "./navlink";

export default function Navbar() {
  const [flyout, setFlyout] = useState(0);
  const [navWidth, setNavWidth] = useState(0);
  const navLinksRef = useRef<HTMLDivElement>(null);

  const handleFlyout = (x: number) => {
    setFlyout(x);
  };

  useEffect(() => {
    if (navLinksRef.current) {
      setNavWidth(navLinksRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (navLinksRef.current) {
        setNavWidth(navLinksRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div ref={navLinksRef} className="flex flex-row justify-around">
          <NavLink
            href="/"
            text="Introduction"
            onMouseEnter={() => handleFlyout(0)}
          />
          <NavLink
            href="/data"
            text="Data"
            onMouseEnter={() => handleFlyout(35)}
          />
          <NavLink
            href="/narrative"
            text="Narrative"
            onMouseEnter={() => handleFlyout(100)}
          />
          <NavLink
            href="/about"
            text="About"
            onMouseEnter={() => handleFlyout(65)}
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <Flyout height={flyout} width={navWidth} />
    </div>
  );
}
