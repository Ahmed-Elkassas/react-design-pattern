import React from "react";
import { useAccordion } from "./Accordion";
import { uesAccordionItemContxt } from "./AccordionItem";

function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordion();
  const id = uesAccordionItemContxt();

  return (
    <h2 onClick={() => toggleItem(id)} className={className}>
      {children}
    </h2>
  );
}

export default AccordionTitle;
