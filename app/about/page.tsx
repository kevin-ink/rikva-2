"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import React, { useState, useEffect } from "react";
import FAQ from "@/components/faq";

export default function About() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="h-auto max-w-screen flex flex-col pt-10 font-maven-pro">
      <div className="h-auto w-full flex flex-col items-center justify-center">
        <h1 className="text-6xl text-sky-600 py-32 text-center overflow-hidden w-auto">
          Project Layers
          <div
            className={`border-4 w-full transition-transform duration-300 ease-in-out mt-2 border-sky-500`}
            style={{
              transform: `translateX(-50%) scaleX(${current + 0.2}) `,
            }}
          />
        </h1>
        <Carousel className="bg-sky-100 p-4 rounded w-10/12" setApi={setApi}>
          <CarouselContent className="text-lg">
            <CarouselItem className="flex flex-col">
              <h1 className="text-center text-4xl py-2 text-sky-700">
                Sources
              </h1>
              To start, we wanted to begin with materials of digital formats,
              such as online literature and datasets, that were specifically
              about or relating to our research question. This process required
              mediation and the development of metadata so that these materials
              would be computationally tractable. Our team&apos;s starting point
              revolved around the Bureau of Transportation&apos;s dataset titled
              “2018 Traffic Data for U.S. Airlines and Foreign Airlines U.S.
              Flights,” which included information on the total number of
              passengers for domestic and international flights, revenue
              passenger miles, and load factors. The issue with this data though
              was that it did not help us provide any insight into the
              humanistic questions that we had relating to the topic. The data
              provided seemed very business-oriented in that it felt like the
              comparative statistics given felt more useful to airline companies
              or the general public. As such, we used this air traffic dataset
              as a starting point into collecting more data from different
              sources that helped to contribute to the narrative that we wanted
              to discuss with our research questions. Our secondary datasets
              outside of our dataset included the 2018 census and the air
              pollution scores from the communities of Los Angeles from
              CalEnviroScreen (a division of the California government focused
              on environmental data and science), the “Complaints about
              Discrimination” section in annual air travel consumer reports from
              2014 to 2018 from the Bureau of Transportation, and the air travel
              consumer reports from the U.S. Department of Transportation. We
              also implemented multiple scholarly journals and articles from a
              variety of credible new sources, which are displayed in our
              annotated bibliography. Together, the datasets and reports
              provided us with a strong background for our research regarding
              the environmental and societal challenges that airports and air
              traffics create in a comprehensive manner.
            </CarouselItem>
            <CarouselItem className="flex flex-col">
              <h1 className="text-center text-4xl py-2 text-sky-700">
                Process
              </h1>
              These materials that we would find would then undergo processing,
              which includes data mining or statistical analysis, as a means of
              conducting analysis that relates to our research questions. Much
              of these computational methods and tools may be incomprehensible
              to the user, and having some understanding of these inner working
              processes would allow for critical engagement. Our primary dataset
              from the Bureau of Transportation consisted of 12 tables that had
              breakdowns in statistics by individual airlines and airports and
              comparative statistics from previous years highlighting changes
              and trends in air travel. The dataset provided was very clean
              given its business-oriented nature, though we did ultimately
              narrow our dataset down to 2 tables that contained the information
              we were looking for regarding the amount of enplaned passengers
              from the top 10 busiest airports and the amount of scheduled
              enplanements from the years 2016 to 2018. Additional data
              regarding the population of each of the metropolitan areas with
              the top 10 busiest airports was also added to the table with the
              amount of enplaned passengers from the top 10 busiest airports.
              Usage of Excel and the Pandas software library written for the
              Python programming language was integral in the processing of our
              data, and all data files were saved into separate CSV files.
              Visualizations were created using Tableau Public due to the
              software being a popular and accessible tool that allows you to
              publish interactive data visualizations to the web for free. Each
              visualization dealt with different quantitative and categorical
              variables that were visualized with the appropriate type of graph,
              map, or chart.
            </CarouselItem>
            <CarouselItem className="flex flex-col">
              <h1 className="text-center text-4xl py-2 text-sky-700">
                Presentation
              </h1>
              Lastly, the presentation component would consist of us making use
              of online platforms to customize to display our findings and
              research. For this class, it was determined ahead of time that an
              online website would be created to display our work, and my group
              spent much time figuring out the format of this website in order
              to enhance the impact of our project and reinforce its argument
              through elements such as graphic effect, most notably relating to
              our data visualizations of choice. Our Web Specialist Kevin
              decided that it was most flexible to build the website from
              scratch using a front end stack consisting of React, NodeJS, and
              NextJS. That way, the website can be easily customized to best
              present the narrative. The repository for the code of the website
              was hosted on a public git repository, and the website was
              deployed through Vercel, a web-hosting solution. We decided to
              present the narrative in a minimalistic way which is reflected
              through our websites color scheme and design, and our
              visualizations were linked onto the website through Tableau’s API.
              All our visualizations were presented through Tableau’s
              interactive visualization software, viewable straight from the
              website. We tried our best to make sure the website is accessible
              and easy to navigate with frequent signals towards the user what
              kind of interactions are needed (such as a signal to scroll).
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex flex-row justify-between gap-x-4 w-10/12 mb-[25vh] flex-wrap">
          <FAQ />
          <div className="flex-1 rounded bg-sky-300/50 p-2 max-h-fit mt-8">
            <h1 className="text-3xl py-2 text-slate-700">Acknowledgements</h1>
            <p className="text-lg">
              We would like to thank all the team members who put together this
              DH project to the best of our abilities. We would also like to
              express our gratitude towards Dr. Ryan Horne and T.A. Nick
              Schwieterman for helping us with multiple challenges we have
              encountered during the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
