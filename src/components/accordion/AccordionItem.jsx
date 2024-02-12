import React, { createContext, useContext } from "react";

const AccordionItemContxt = createContext();

export function uesAccordionItemContxt() {
  const accordionItemContxt = useContext(AccordionItemContxt);

  if (!accordionItemContxt) {
    throw new Error("Warnning!!, This must be wrapped by <Accordion.Item>");
  }

  return accordionItemContxt;
}

function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContxt.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContxt.Provider>
  );
}

export default AccordionItem;
