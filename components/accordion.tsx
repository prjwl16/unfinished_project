import {
  Accordion as AccordionComponent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordion = () => {
  return (
    <AccordionComponent type="single" collapsible className="mt-8">
      <AccordionItem value="item-1">
        <AccordionTrigger>Dropdown</AccordionTrigger>
        <AccordionContent>Body of the dropdown</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Dropdown</AccordionTrigger>
        <AccordionContent>Body of the dropdown</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" isLast>
        <AccordionTrigger>Dropdown</AccordionTrigger>
        <AccordionContent>Body of the dropdown</AccordionContent>
      </AccordionItem>
    </AccordionComponent>
  );
};

export default Accordion;
