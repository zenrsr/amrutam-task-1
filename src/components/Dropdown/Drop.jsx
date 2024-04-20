import { Button } from "@nextui-org/react";
import React, { useState } from "react";

export const Menu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-3/4 mt-1 flex items-center justify-center">
      <Button
        className="flex justify-center items-center px-4 py-2 w-full bg-white text-gray-700 rounded-md focus:outline-none focus:bg-gray-300"
        onClick={toggleMenu}
      >
        {selectedItem ? selectedItem.name : "📌 Location"}
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
