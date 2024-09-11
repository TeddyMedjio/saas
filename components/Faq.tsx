import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem className="border-b border-[#ffffff60]" value="item-1">
        <AccordionTrigger className="text-white text-base md:text-xl font-bold">
          How does the pricing work for teams
        </AccordionTrigger>
        <AccordionContent className="text-purple-100 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo eum
          odit vel, nobis exercitationem dolores laboriosam quas id dolorum a
          porro quis pariatur, aut laudantium earum incidunt consequuntur ipsa!
          pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-b border-[#ffffff60]" value="item-2">
        <AccordionTrigger className="text-white text-base md:text-xl font-bold">
          How does the pricing work for teams
        </AccordionTrigger>
        <AccordionContent className="text-purple-100 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          labore delectus, odit quod ad ducimus iusto maxime quam tempore dolor
          nesciunt, excepturi quis illum obcaecati saepe exercitationem vel
          quisquam asperiores.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-b border-[#ffffff60]" value="item-3">
        <AccordionTrigger className="text-white text-base md:text-xl font-bold">
          How does the pricing work for teams
        </AccordionTrigger>
        <AccordionContent className="text-purple-100 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quaerat
          eligendi natus, delectus amet vero excepturi molestiae optio cum
          laboriosam, necessitatibus consectetur saepe repellendus vel sint.
          Perferendis esse ipsa velit!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
