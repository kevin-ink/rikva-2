"use client";
import { useEffect, useState } from "react";
import NavigationFooter from "@/components/navfooter";

export default function Page() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    setScreenHeight(window.innerHeight * 0.95);

    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen">
      <iframe
        className="w-full h-full pt-10"
        src={`https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1nwmi5zy0zMPoONwv4q43zDyE37_mfzIw2O9jhtooYAc&font=Default&lang=en&initial_zoom=2&height=${screenHeight}`}
      ></iframe>
      <NavigationFooter
        prevHref={null}
        prev={null}
        nextHref={"/narrative"}
        next={"Narrative"}
      />
    </div>
  );
}
