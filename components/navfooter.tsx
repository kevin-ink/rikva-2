import Link from "next/link";

export default function NavigationFooter({
  prevHref,
  prev,
  nextHref,
  next,
}: {
  prevHref: string | null;
  prev: string | null;
  nextHref: string | null;
  next: string | null;
}) {
  return (
    <div className="h-auto w-full flex flex-row justify-between xl:px-10 px-6 font-maven-pro font-semibold text-lg mt-4 md:mt pb-4">
      {prevHref ? (
        <Link href={prevHref}>
          <div className="flex flex-col items-center hover:bg-white p-2">
            Previous Part:
            <span>{prev}</span>
          </div>
        </Link>
      ) : (
        <div></div>
      )}
      {nextHref ? (
        <Link
          className="flex flex-col items-center hover:bg-white p-2"
          href={nextHref}
        >
          Next Part:
          <span>{next}</span>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}
