import React from "react";
import { useDropdown } from "./Dropdown";

export const DropdownMenu = ({ children }) => {
  const { isOpen } = useDropdown();

  return isOpen ? <div className="dropdown-menu">{children}</div> : null;
};
