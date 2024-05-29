"use client"
import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='w-fit h-fit ml-10 mt-10 z-50'>

      <button
        className="top-24 left-4 mr-10 z-50 flex text-red"
        onClick={handleToggle}
        >
        <img src="/burguer.svg" alt="Menu" /> 
      </button>
    </div>

      <div className="relative" style={{ marginTop: '64px' }}> {/* Margen superior para dejar espacio para el encabezado */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50" onClick={handleToggle}></div>
        )}

        <div
          className={`fixed top-24 left-0 w-64 h-full text-white p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0 bg-customBlue bg-opacity-90 z-40' : '-translate-x-full'}`}
        >
          {isOpen && (
            <ul className="mt-24 space-y-2">
              <a href="/screens/EventosWallon">
                <li className="p-2 flex items-center">
                  <img src="/logowallon.svg" alt="Item 1" className="mr-2 pt-2 w-12" />
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
      </div>
    </>
  );
};

export default BurgerMenu;