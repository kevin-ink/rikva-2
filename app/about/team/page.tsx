"use client";
import { useState } from "react";
import SimpleProfile from "@/components/simple-profile";
import Image from "next/image";
import { profiles } from "./profiles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Team() {
  const [name, setName] = useState<string | null>(null);

  const handleHover = (hovered: string) => {
    setName(hovered);
  };

  return (
    <div className="h-auto min-h-screen w-full flex flex-col items-center font-maven-pro pt-10 overflow-hidden">
      <div className="relative h-[75vh] w-full flex items-center justify-center">
        <Image
          src="/flightPath.svg"
          width={1920}
          height={1080}
          alt="background image"
          priority
          className="absolute object-cover top-0 left-0 h-full w-full"
        />
        <div className="absolute top-0 left-0 h-full w-full animate-reveal translate-x-full bg-sky-200"></div>
        <h1 className="text-6xl text-sky-700 text-center font-bold drop-shadow-lg">
          Meet the Team
        </h1>
      </div>
      <div className="w-full h-auto flex flex-row justify-around mt-10 flex-wrap pt-10 bg-sky-100/25">
        <SimpleProfile
          name="Isabel Valencia"
          role="Project Manager"
          onHover={handleHover}
          selected={name === "Isabel Valencia"}
        />
        <SimpleProfile
          name="Rahul Verma"
          role="Content Specialist"
          onHover={handleHover}
          selected={name === "Rahul Verma"}
        />
        <SimpleProfile
          name="Kevin Li"
          role="Web Specialist"
          onHover={handleHover}
          selected={name === "Kevin Li"}
        />
        <SimpleProfile
          name="Alan Wong"
          role="Data/Mapping Specialist"
          onHover={handleHover}
          selected={name === "Alan Wong"}
        />
        <SimpleProfile
          name="Victoria Wu"
          role="Visualization Specialist"
          onHover={handleHover}
          selected={name === "Victoria Wu"}
        />
      </div>
      <div className="w-full px-12 h-[60vh] pt-10 flex flex-row bg-sky-300 justify-center">
        {name && name in profiles && (
          <Tabs
            defaultValue="Bio"
            className="w-1/2 flex flex-col items-center text-lg"
          >
            <TabsList className="bg-sky-200 text-black">
              <TabsTrigger value="Bio">Bio</TabsTrigger>
              <TabsTrigger value="Contribution">Contribution</TabsTrigger>
            </TabsList>
            <TabsContent value="Bio">
              {profiles[name as keyof typeof profiles].bio}
            </TabsContent>
            <TabsContent value="Contribution">
              {profiles[name as keyof typeof profiles].contribution}
            </TabsContent>
          </Tabs>
        )}
        {!name && (
          <div className="text-lg">
            Hover over a team member to see more information!
          </div>
        )}
      </div>
    </div>
  );
}
