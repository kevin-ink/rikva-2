import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen px-12 gap-y-4 font-maven-pro">
      <h1 className="text-3xl">TIMELINE</h1>
      <p className="text-lg text-center rounded bg-sky-300/75 p-2 w-11/12">
        The following is a timeline regarding the evolution of airplane policy.
        Some important facts to take note of is that the airplane was first
        invented in 1903 yet the first major policy to be put in place
        wasn&apos;t until 1932, where flight inspections became a necessary part
        of everyday flight travel. It would take a while for many more policies
        to be enacted, with the biggest one being the implementation of the
        Transportation Security Administration (TSA) after the attacks of 9/11.
        For social change in the airline industry specifically, the National Air
        and Space Museum writes, “African Americans could choose to fly, but few
        did. Many airport facilities were segregated and discrimination was
        widespread. While the airlines themselves were not legally segregated,
        airports often were. Throughout the South, inferior airport
        accommodations discouraged African Americans from flying. Complaints to
        the airlines about discrimination proved fruitless. The airlines
        didn&apos;t control the municipally owned airports they served and did
        not wish to get involved for fear of losing white customers. Until the
        Civil Rights movement began to bring about change, air travel remained
        mostly for white people.” The social change specific to African
        Americans was coupled with the Civil Rights Movement. While not directly
        stated, it is important to mention that with escalating prices - where
        the average flight is no longer $5 - flight becomes increasingly
        exclusive, transforming air transportation into a luxury privilege.
      </p>
      <Link href="timeline/visual">
        <Button variant="ghost" className="rounded-none text-2xl">
          Explore Timeline -&gt;
        </Button>
      </Link>
    </div>
  );
}
