import NavigationFooter from "@/components/navfooter";

export default function RQ1() {
  return (
    <>
      <div className="w-full h-fit font-maven-pro bg-slate-600">
        <h1
          id="title"
          className="text-5xl pt-32 pl-8 md:pb-32 pb-16 font-bold text-left bg-sky-200"
        >
          a. Place in Literature and Significance
        </h1>
        <div className="mt-10 px-16 flex flex-row justify-between text-white">
          <ol className="hidden md:block w-auto h-fit mr-32 whitespace-nowrap sticky top-20 text-lg">
            <a href="#title" className="text-xl font-bold">
              Place in Literature and Significance
            </a>
            <li>
              <a href="#place_in_literature">Place In Literature</a>
            </li>
            <li>
              <a href="#ack">Acknowledgement Note</a>
            </li>
            <li>
              <a href="#significance">Significance</a>
            </li>
            <li>
              <a href="#overall">Conclusion</a>
            </li>
          </ol>
          <div className="flex flex-col text-lg space-y-12 pr-2 md:pr-48 xl:pr-72">
            <h1 id="place_in_literature" className="text-3xl font-bold">
              Place in Literature
            </h1>
            {/* <p>{text.paragraph1}</p>
            <p id="ack" className="rounded bg-slate-700 p-2">
              {text.paragraph2}
            </p>
            <p>{text.paragraph3}</p>
            <h1 id="significance" className="text-3xl font-bold">
              Significance
            </h1>
            <p>{text.paragraph4}</p>
            <p>{text.paragraph5}</p>
            <p>{text.paragraph6}</p>
            <p id="overall" className="rounded bg-slate-700 p-2">
              {text.paragraph7}
            </p> */}
          </div>
        </div>
        <NavigationFooter
          prevHref={null}
          prev={null}
          nextHref={"narrative/rq1"}
          next={"b"}
        />
      </div>
    </>
  );
}
