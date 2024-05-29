'use client';

import React, { useState } from 'react';
import Header from '@/components/atoms/Header/page';
import Image from 'next/image';
import { FiArrowDownCircle, FiInfo } from 'react-icons/fi';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="relative w-[1000px] h-[500px] shadow-lg rounded-lg">
          <div className="absolute top-0 left-0 w-full bg-[#D56262] text-white flex items-center justify-between p-6 rounded-t-lg z-20">
            <div className="flex items-center">
              <Image src="/pdf.svg" alt="PDF Icon" width={24} height={24} className="w-10 h-10 mr-2" />
              <span>PDF - Boleta Juan Reguera Espinoza</span>
            </div>
            <div>
              <FiInfo className="text-white text-2xl cursor-pointer" onClick={toggleModal} />
            </div>
          </div>
          <Image
            src="/Rectangle 5.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <a
            href="/prueba.pdf"
            download
            className="absolute inset-0 flex items-center justify-center text-black text-9xl z-10"
          >
            <FiArrowDownCircle />
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30" onClick={toggleModal}>
          <div className="bg-white p-8 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Información</h2>
            <p>Esta es una boleta de pago que contiene información importante. Por favor, descárguela y revise los detalles.</p>
            <button
              className="mt-4 bg-[#D56262] text-white py-2 px-4 rounded"
              onClick={toggleModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
