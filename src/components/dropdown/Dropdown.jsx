import React, { createContext, useContext, useState } from "react";
import { DropdownToggle } from "./DropdownToggle";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownItem";

const DropdownContext = createContext();

export function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown");
  }
  return context;
}

export const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div className="dropdown">{children}</div>
    </DropdownContext.Provider>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
