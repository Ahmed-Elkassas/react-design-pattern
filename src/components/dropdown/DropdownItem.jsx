import React from "react";

export const DropdownItem = ({ children, onClick }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
};
