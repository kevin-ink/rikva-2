import NavigationFooter from "@/components/navfooter";
import { text } from "./text";
import TableauVisual from "@/components/tableau";
import Image from "next/image";

export default function RQ2() {
  return (
    <div className="w-full max-w-screen h-fit font-maven-pro bg-slate-600">
      <h1
        id="title"
        className="text-5xl pt-32 md:pb-32 pb-16 font-bold text-center bg-sky-200"
      >
        b. Research Question 2
        <p className="text-4xl font-normal">
          In what ways are social dynamics, such as experiences of
          discrimination, affecting air travel decisions of marginalized
          communities (based on race, gender, and/or religious affiliation)?
        </p>
      </h1>

      <div className="mt-10 px-16 flex flex-row justify-between max-w-full text-white">
        <ol className="hidden lg:block w-auto h-fit xl:mr-32 whitespace-nowrap sticky top-20 text-md">
          <a href="#title" className="lg:text-xl font-bold hover:text-sky-200">
            Research Question 2
          </a>
          <li>
            <a href="#interrogate" className="hover:text-sky-200">
              Interrogation Dynamics
            </a>
          </li>
          <li>
            <a href="#viz1" className="hover:text-sky-200">
              Viz #1: Airport Complaints by Type
            </a>
          </li>
          <li>
            <a href="#viz2" className="hover:text-sky-200">
              Viz #2: Number of Complaints
            </a>
          </li>
          <li>
            <a href="#viz3" className="hover:text-sky-200">
              Viz #3: Scheduled Passengers
            </a>
          </li>
          <li>
            <a href="#photo" className="hover:text-sky-200">
              Airport TSA Checkpoints
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
          <p id="interrogate" className="rounded bg-slate-700 p-2">
            {text.paragraph2}
          </p>
          <p>{text.paragraph3}</p>
          <TableauVisual
            id={"1"}
            src={
              "https://public.tableau.com/shared/7NRCDW5WX?:display_count=n&:origin=viz_share_link"
            }
          />
          <p>{text.paragraph4}</p>
          <TableauVisual
            id={"2"}
            src={
              "https://public.tableau.com/views/BarGraph_17111706179640/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
            }
          />
          <p>{text.paragraph5}</p>

          <p>{text.paragraph6}</p>
          <TableauVisual
            id={"3"}
            src="https://public.tableau.com/views/Scheulde/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
          />
          <p>{text.paragraph7}</p>
          <p>{text.paragraph8}</p>
          <Image
            src="/airport.png"
            alt="airport noise contour map"
            width="1664"
            height="1090"
            id="photo"
            style={{ objectFit: "contain", border: "2px solid black" }}
          />
          <p>{text.paragraph9}</p>
          <p>{text.paragraph10}</p>
          <p id="conclusion" className="rounded bg-slate-700 p-2">
            {text.paragraph11}
          </p>
        </div>
      </div>
      <NavigationFooter
        prevHref={"rq1"}
        prev={"b"}
        nextHref={"/"}
        next={"back to homepage"}
      />
    </div>
  );
}
