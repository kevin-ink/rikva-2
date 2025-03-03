import ScrollCanvas from "@/components/scroll-canvas";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ScrollCanvas frames={252} />
      <div className="h-auto w-full flex flex-col items-center font-maven-pro">
        <div className="flex flex-col gap-y-8 h-50 w-2/3 mt-10 items-center text-2xl">
          <p>
            Our narrative details some of the more significant consequences like
            discrimination and hazardous pollution. We focused on analyzing
            datasets gathered from various sources dedicated to tracking air
            traffic, air pollution, air noise complaints, and air travel
            discrimination. These datasets reveal two important issues
            surrounding air travel, which is reflected by the following
            questions:
          </p>
          <Carousel className="bg-sky-100 p-4 rounded w-2/3">
            <CarouselContent className="text-3xl">
              <CarouselItem>
                How does a large, busy airport in the U.S. impact it&apos;s
                surrounding communities?
              </CarouselItem>
              <CarouselItem>
                In what ways are social dynamics, such as experiences of
                discrimination, affecting air travel decisions of marginalized
                communities (based on race, gender, and/or religious
                affiliation)?
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex flex-row gap-x-4">
            <p className="flex-1">
              The answers to these questions are the focus of our narrative and
              form the basis of why we argue that airport and air traffic
              guidelines are insufficient today. More background information
              about the history of airline policy can be found here, in the form
              of a timeline.
            </p>
            <p className="flex-1 rounded bg-sky-300/50 p-2">
              Airports lacks policies to truly guard against discrimination of
              marginalized communities, disincentizing these communities from
              travel. Additonally, current airport policies on air and noise
              pollution are insufficient, as surrounding communities are still
              experiencing harmful negative effects from airport pollution.
            </p>
          </div>
          <div className="flex flex-row justify-around w-full pb-12">
            <Link href="/data">
              <Button
                variant={"ghost"}
                className="rounded-none h-20 w-auto text-lg mt-12"
              >
                Explore Data -&gt;
              </Button>
            </Link>
            <Link href="/narrative">
              <Button
                variant={"ghost"}
                className="rounded-none h-20 w-auto text-lg mt-12"
              >
                Explore Narrative -&gt;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
