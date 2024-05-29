'use client';

import React from 'react';
import Header from '@/components/atoms/Header/page';
import BurgerMenu from '@/components/atoms/burger/page';
import Table from '@/components/atoms/table/table';
const App: React.FC = () => {
  return (
    <div className='flex flex-wrap'>
      <Header />
      <BurgerMenu />
      <div className="container mx-auto p-8">
          
          <h1 className="text-2xl font-bold mb-4">Tabla de Calificaciones</h1>
          <Table />
        </div>
    </div>
  );
};

export default App;
