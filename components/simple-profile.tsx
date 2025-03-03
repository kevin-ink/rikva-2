"use client";
import Image from "next/image";

export default function SimpleProfile({
  name,
  role,
  selected,
  onHover,
}: {
  name: string;
  role: string;
  selected: boolean;
  onHover: (hovered: string) => void;
}) {
  const fileName = name.split(" ")[0].toLowerCase();

  return (
    <div
      className={`h-auto w-auto p-4 rounded-lg flex flex-col hover:bg-sky-300 hover:rounded-none ${
        selected ? "bg-sky-300 rounded-none" : ""
      }`}
      onMouseOver={() => onHover(name)}
    >
      <Image
        src={`/profiles/${fileName}.jpeg`}
        width={200}
        height={250}
        alt={`${name} profile`}
        style={{ objectFit: "cover", width: "200px", height: "250px" }}
        className="rounded"
      />
      <div className="flex flex-col">
        <span className="text-md font-semibold text-left">{name}</span>
        <span className="text-sm text-right">{role}</span>
      </div>
    </div>
  );
}
