import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-64 text-white h-[87.9vh] max-h-screen p-4 ${isOpen ? 'bg-customBlue bg-opacity-90 z-50' : 'bg-transparent'}`} style={{ position: 'absolute', top: 90, right: 'auto', left: 'auto' }}>
      
      <button className="flex text-red" onClick={handleToggle}><img src="/burguer.svg" alt="" /></button>
      {isOpen && (
        <ul className="mt-4 space-y-2">
          <a href="/screens/EventosWallon">

          <li className="p-2 flex items-center">
            <img src="/logowallon.svg" alt="Item 1" className="mr-2 pt-2 w-12 " />
            Eventos Wallon
          </li>
          </a>
          <a href="/screens/PortalWallonIndex">

          <li className="p-2 flex items-center">
            <img src="/historial.svg" alt="Item 3" className="mr-2 pt-2 w-12" />
            Historial Academico
          </li>
          </a>
          <a href="/screens/Maestros">

          <li className="p-2 flex items-center">
            <img src="/agenda.svg" alt="Item 2" className="mr-2 pt-2 w-12" />
            Agendar con profesor
          </li>
          </a>

          <a href="/screens/DescargaPermiso">

          <li className="p-2 flex items-center">
            <img src="/extracurriculares.svg" alt="Item 4" className="mr-2 pt-2 w-12" />
            Extracurriculares
          </li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
