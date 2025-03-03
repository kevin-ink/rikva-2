import FooterLink from "./footer-link";

export default function Flyout({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  return (
    <div
      style={{ height: `${height}px` }}
      className={`transition-all duration-200 flex flex-row overflow-hidden pl-6 w-full justify-center`}
    >
      <div className="flex-1" />
      <div
        style={{ width: `${width * 0.95}px` }}
        className="grid grid-cols-4 grid-rows-3 gap-y-2 h-fit text-sky-100 text-md"
      >
        {height == 35 && (
          <FooterLink name="Timeline" x={2} y={1} link="/data/timeline" />
        )}
        {height == 100 && (
          <>
            <FooterLink
              name="Context"
              x={3}
              y={1}
              link="/narrative/place_in_literature_and_significance"
            />
            <FooterLink name="RQ1" x={3} y={2} link="/narrative/rq1" />
            <FooterLink name="RQ2" x={3} y={3} link="/narrative/rq2" />
          </>
        )}
        {height == 65 && (
          <>
            <FooterLink name="Team" x={4} y={1} link="/about/team" />
            <FooterLink name="Bibliography" x={4} y={2} link="/about/bib" />
          </>
        )}
      </div>
      <div className="flex-1" />
    </div>
  );
}
