import React, { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export function useAccordion() {
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error(`It's not wrapped by <Accordion> component!!`);
  }

  return accordionContext;
}

export default function Accordion({ className, initialOpenItemId, children }) {
  const [openItemId, setOpenItemId] = useState(initialOpenItemId);

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const values = {
    openItemId,
    toggleItem
  };

  return (
    <AccordionContext.Provider value={values}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
