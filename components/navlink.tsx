import Link from "next/link";

export default function NavLink({
  href,
  text,
  onMouseEnter,
}: {
  href: string;
  text: string;
  onMouseEnter: () => void;
}) {
  return (
    <Link className="navlink" href={href} onMouseEnter={onMouseEnter}>
      {text}
    </Link>
  );
}
