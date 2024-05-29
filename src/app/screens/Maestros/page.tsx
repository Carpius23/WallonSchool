'use client';
import React from 'react';
import ProfesorCard from '@/components/atoms/teachers-card/page';
import Header from '@/components/atoms/Header/page';
import BurgerMenu from '@/components/atoms/burger/page';

const App: React.FC = () => {
  const profesores = [
    { nombre: 'Ericka del Rio Magaña', materia: 'Español' },
    { nombre: 'Martin Muñoz Mandujano', materia: 'Ingles' },
    { nombre: 'Mauricio Corona Ibarra', materia: 'Ciencias' },
    { nombre: 'Ruth Corona Moreno', materia: 'Matematicas' },
    { nombre: 'Joab Negrete Hernandez', materia: 'Historia' },
  ];

  return (
    <>
      <Header />
      <BurgerMenu />
      
      <h1 className="text-3xl font-bold my-6 rounded-md p-4 text-center">Profesores</h1>
      <div className="min-h-16 bg-white flex flex-col items-center">
        <div className="max-w-7xl w-full mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {profesores.map((profesor, index) => (
              <ProfesorCard
                key={index}
                nombre={`Profesor: ${profesor.nombre}`}
                materia={`Materia: ${profesor.materia}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
