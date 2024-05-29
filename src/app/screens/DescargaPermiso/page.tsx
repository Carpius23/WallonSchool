'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/atoms/Header/page';
import Image from 'next/image';
import { FiArrowDownCircle, FiInfo } from 'react-icons/fi';
import BurgerMenu from '@/components/atoms/burger/page';

const RegistroEvento: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModalOpen(prevState => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
  }, [isModalOpen]);

  return (
    <>
    <BurgerMenu />
      <Header />
      <div className='h-[70vh] flex justify-center items-center'>
        <div className="w-[90%] max-w-[1000px] h-[80%] max-h-[500px] shadow-lg rounded-lg relative">
          <div className="absolute top-0 left-0 w-full bg-[#D56262] text-white flex items-center justify-between p-4 rounded-t-lg z-20">
            <div className="flex items-center">
              <Image src="/pdf.svg" alt="PDF Icon" width={24} height={24} className="w-8 h-8 mr-2" />
              <span>PDF - Registro Spelling Bee 2024</span>
            </div>
            <div>
              <FiInfo className="text-white text-xl cursor-pointer" onClick={toggleModal} />
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
            href="/PermisoWallon.pdf"
            download
            className="absolute inset-0 flex items-center justify-center text-black text-8xl z-10"
          >
            <FiArrowDownCircle />
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30" onClick={toggleModal}>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-[80%] max-h-[80%] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Información</h2>
            <p>Si va a dar autorización a su hijo de ir al viaje u evento, favor de llevar impreso el documento correspondiente, <br />lo puede descargar por PDF, llevar el documento firmado, y si es necesario, el pago correspondiente.</p>
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

export default RegistroEvento;
