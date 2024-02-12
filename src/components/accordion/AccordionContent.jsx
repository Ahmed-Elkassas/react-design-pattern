import React from "react";
import { useAccordion } from "./Accordion";
import { uesAccordionItemContxt } from "./AccordionItem";

function AccordionContent({ className, children }) {
  const { openItemId } = useAccordion();
  const id = uesAccordionItemContxt();
  const isOpen = openItemId === id;
  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}

export default AccordionContent;
