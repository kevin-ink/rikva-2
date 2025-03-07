import NavigationFooter from "@/components/navfooter";
import { text } from "./text";
import TableauVisual from "@/components/tableau";
import Image from "next/image";

export default function RQ1() {
  return (
    <div className="w-full max-w-screen h-fit font-maven-pro bg-slate-600">
      <h1
        id="title"
        className="text-5xl pt-32 md:pb-32 pb-16 font-bold text-center bg-sky-200"
      >
        b. Research Question 1
        <p className="text-4xl font-normal">
          How does a large, busy airport impact it&apos;s surrounding
          communities?
        </p>
      </h1>

      <div className="mt-10 px-16 flex flex-row justify-between max-w-full text-white">
        <ol className="hidden lg:block w-auto h-fit xl:mr-32 whitespace-nowrap sticky top-20 text-md">
          <a href="#title" className="lg:text-xl font-bold hover:text-sky-200">
            Research Question 1
          </a>
          <li>
            <a href="#viz1" className="hover:text-sky-200">
              Viz #1: Top 10 Busiest Airports
            </a>
          </li>
          <li>
            <a href="#pollution" className="hover:text-sky-200">
              Air Pollution Quote
            </a>
          </li>
          <li>
            <a href="#viz2" className="hover:text-sky-200">
              Viz #2: Pollution Burden by ZIP
            </a>
          </li>
          <li>
            <a href="#communities" className="hover:text-sky-200">
              Communities Insight
            </a>
          </li>
          <li>
            <a href="#viz3" className="hover:text-sky-200">
              Viz #3: Poverty Intensity
            </a>
          </li>
          <li>
            <a href="#map" className="hover:text-sky-200">
              Airport Noise Contour Map
            </a>
          </li>
          <li>
            <a href="#conclusion" className="hover:text-sky-200">
              Conclusion
            </a>
          </li>
        </ol>
        <div className="flex flex-col text-lg space-y-12 pr-2 max-w-full md:pr-32 xl:pr-72">
          <p>{text.paragraph1}</p>
          <TableauVisual
            id={"1"}
            src={
              "https://public.tableau.com/views/DataVisualizationsforMilestone6/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
            }
          />
          <p>{text.paragraph2}</p>
          <p>{text.paragraph3}</p>
          <p id="pollution" className="rounded bg-slate-700 p-2">
            {text.paragraph4}
          </p>
          <p>{text.paragraph5}</p>
          <TableauVisual
            id={"2"}
            src="https://public.tableau.com/views/lax_pollution/Sheet1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
          />
          <p>{text.paragraph6}</p>
          <p id="communities" className="rounded bg-slate-700 p-2">
            {text.paragraph7}
          </p>
          <p>{text.paragraph8}</p>
          <p>{text.paragraph9}</p>
          <TableauVisual
            id={"3"}
            src="https://public.tableau.com/views/poverty_intensity/Sheet1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"
          />
          <p>{text.paragraph10}</p>
          <p>{text.paragraph11}</p>
          <Image
            src="/noise contour map.png"
            alt="airport noise contour map"
            width="1664"
            height="1090"
            id="map"
          />
          <p>{text.paragraph12}</p>
          <p id="conclusion" className="rounded bg-slate-700 p-2">
            {text.paragraph13}
          </p>
        </div>
      </div>
      <NavigationFooter
        prevHref={"place_in_literature_and_significance"}
        prev={"a"}
        nextHref={"rq2"}
        next={"c"}
      />
    </div>
  );
}
