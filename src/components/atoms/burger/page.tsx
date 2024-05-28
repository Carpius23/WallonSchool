import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-48 text-white h-screen max-h-screen p-4 ${isOpen ? 'bg-customBlue ' : 'bg-transparent'}`}>
      
      <button className="flex text-red" onClick={handleToggle}>_ _ _</button>
      
      {isOpen && (
        <ul className="mt-4 space-y-2">
          <li className="p-2 flex items-center">
            <img src="/logowallon.svg" alt="Item 1" className="mr-2" />
            Item 1
          </li>
          <li className="p-2 flex items-center">
            <img src="/agenda.svg" alt="Item 2" className="mr-2" />
            Item 2
          </li>
          <li className="p-2 flex items-center">
            <img src="/historial.svg" alt="Item 3" className="mr-2" />
            Item 3
          </li>
          <li className="p-2 flex items-center">
            <img src="/extracurriculares.svg" alt="Item 4" className="mr-2" />
            Item 4
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;

