import Link from "next/link";
import NavigationFooter from "@/components/navfooter";

export default function Narrative() {
  return (
    <div>
      <div className="w-full h-full flex flex-row justify-between px-16 xl:px-32 pt-32">
        <div className="flex-1 flex flex-col p-4 text-black font-maven-pro">
          <h1 className="text-5xl font-bold">Narrative</h1>
          <p className="mt-10 text-lg font-maven-pro">
            In this section, we will explore the placement of our digital
            humanities project within the broader academic discourse, highlight
            its significance, and provide a comprehensive discussion of our
            research questions.
          </p>
          <div className="mt-32 text-lg flex flex-col space-y-2">
            <Link
              href="narrative/place_in_literature_and_significance"
              className="p-4 bg-white border-2 border-black hover:bg-slate-500 w-fit"
            >
              <span className="mr-2">a</span> Place in Literature and
              Significance
            </Link>
            <Link
              href="narrative/rq1"
              className="p-4 bg-white border-2 border-black hover:bg-slate-500 w-fit"
            >
              <span className="mr-2">b</span> Research Question 1
            </Link>
            <Link
              href="narrative/rq2"
              className="p-4 bg-white border-2 border-black hover:bg-slate-500 w-fit"
            >
              <span className="mr-2">c</span> Research Question 2
            </Link>
          </div>
        </div>
        <div className="xl:flex-1"></div>
      </div>
      <NavigationFooter
        prevHref={null}
        prev={null}
        nextHref={"narrative/place_in_literature_and_significance"}
        next={"a"}
      />
    </div>
  );
}
