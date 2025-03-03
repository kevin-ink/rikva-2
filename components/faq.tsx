import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex-1 bg-sky-100 p-2 rounded mt-8"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">
          Where are the member bios and individual contributions?
        </AccordionTrigger>
        <AccordionContent className="text-md">
          You can find the member bios and their contributions{" "}
          <Link href="/about/team" className="underline hover:font-bold">
            here
          </Link>
          .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl">
          Where is the annotated bibliography?
        </AccordionTrigger>
        <AccordionContent className="text-md">
          You can find the annotated bilbiography{" "}
          <Link href="/about/bib" className="underline hover:font-bold">
            here
          </Link>
          .
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl">
          Where is the works cited?
        </AccordionTrigger>
        <AccordionContent className="text-md">
          You can find the works cited page in the same page as the annotated
          bibiliography,{" "}
          <Link href="/about/bib" className="underline hover:font-bold">
            here
          </Link>
          .
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
