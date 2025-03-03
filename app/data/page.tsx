import { text } from "./text";
import NavigationFooter from "@/components/navfooter";

export default function Data() {
  return (
    <div className="w-full h-fit font-maven-pro bg-slate-600">
      <h1
        id="title"
        className="text-5xl pt-32 pl-8 md:pb-32 pb-16 font-bold text-left bg-sky-200"
      >
        Data
      </h1>
      <div className="mt-10 px-16 flex flex-row justify-between text-white">
        <ol className="hidden lg:block w-auto h-fit xl:mr-32 mr-16 whitespace-nowrap sticky top-20 text-md">
          <a
            href="#title"
            className="lg:text-xl text-lg font-bold hover:text-sky-200"
          >
            Data
          </a>
          <li>
            <a href="#disclaimer" className="hover:text-sky-200">
              Disclaimer
            </a>
          </li>
          <li>
            <a href="#critique" className="hover:text-sky-200">
              Data Critique
            </a>
          </li>
        </ol>
        <div className="flex flex-col text-lg space-y-12 pr-2 xl:pr-72">
          <p id="disclaimer" className="rounded bg-slate-700 p-2">
            {text.paragraph1}
          </p>
          <h1 id="critique" className="text-3xl font-bold">
            Data Critique
          </h1>
          <p>{text.paragraph2}</p>
          <p>{text.paragraph3}</p>
          <p>{text.paragraph4}</p>
          <p>{text.paragraph5}</p>
          <p>{text.paragraph6}</p>
          <p>{text.paragraph7}</p>
          <p>{text.paragraph8}</p>
        </div>
      </div>
      <NavigationFooter
        prevHref={null}
        prev={null}
        nextHref={"/data/timeline"}
        next={"Timeline"}
      />
    </div>
  );
}
