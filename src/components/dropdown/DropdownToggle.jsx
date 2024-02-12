import React from "react";
import { useDropdown } from "./Dropdown";

export const DropdownToggle = ({ children }) => {
  const { toggle } = useDropdown();

  return (
    <button onClick={toggle} className="dropdown-toggle">
      {children}
    </button>
  );
};
