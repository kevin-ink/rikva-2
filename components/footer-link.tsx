import Link from "next/link";

export default function FooterLink({
  name,
  x,
  y,
  link,
}: {
  name: string;
  x: number;
  y: number;
  link: string;
}) {
  return (
    <div
      className="w-full flex justify-center"
      style={{
        gridColumnStart: x,
        gridRowStart: y,
        gridColumnEnd: x + 1,
        gridRowEnd: y + 1,
      }}
    >
      <Link href={link} className="hover:text-white w-fit">
        {name}
      </Link>
    </div>
  );
}
