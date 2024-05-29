"use client";

import React, { useState } from 'react';

interface ProfesorCardProps {
  nombre: string;
  materia: string;
}

const ProfesorCard: React.FC<ProfesorCardProps> = ({ nombre, materia }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md text-center cursor-pointer transition-all duration-300 ${showInfo ? 'p-4' : 'p-4'}`} 
      onClick={handleClick}
    >
      {showInfo ? (
        <div className="mb-8 bg-blue-800 text-white p-4 rounded-md">
          <ul className="text-left space-y-2">
            <li><strong>Salón:</strong> 2</li>
            <li><strong>Correo electrónico:</strong> ana.garcia@example.com</li>
            <li><strong>Número de teléfono:</strong> +1 (555) 123-4567</li>
          </ul>
          <div className="textmt-4 p-4 bg-white rounded-md">
            <p className="text-black font-bold text-lg">{nombre}</p>
            <p className="text-black">{materia}</p>
          </div>
        </div>
      ) : (
        <>
          <img
            src="/maestro.svg"
            alt={nombre}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="mt-4 p-4 bg-gray-200 rounded-md">
            <p className="font-bold text-lg">{nombre}</p>
            <p className="text-black">{materia}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfesorCard;
