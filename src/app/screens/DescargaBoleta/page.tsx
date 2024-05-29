'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/atoms/Header/page';
import Image from 'next/image';
import { FiArrowDownCircle, FiInfo } from 'react-icons/fi';
import BurgerMenu from '@/components/atoms/burger/page';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { createRoot } from 'react-dom/client';
import Table from '@/components/atoms/table/table';

const downloadPdf = async () => {
  
  const container = document.createElement('div');
  container.id = 'table-to-pdf';  
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<Table />);

  
  setTimeout(async () => {
    const canvas = await html2canvas(container);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');

  
    root.unmount();
    document.body.removeChild(container);
  },10); 
};



const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <>
    <BurgerMenu />
      <Header />
    <div className='h-[70vh]'>
      <div className="flex flex-col items-center mt-16  h-[100%] bg-white ">
        <div className="relative w-[90%] max-w-[1000px] h-[80%] max-h-[500px] shadow-lg rounded-lg">
          <div className="absolute top-0 left-0 w-full bg-[#D56262] text-white flex items-center justify-between p-4 rounded-t-lg z-20">
            <div className="flex items-center">
              <Image src="/pdf.svg" alt="PDF Icon" width={24} height={24} className="w-8 h-8 mr-2" />
              <span>PDF - Haz click para descargar la boleta</span>
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
          <a href="#" onClick={(e) => { e.preventDefault(); downloadPdf(); }}
            className="absolute inset-0 flex items-center justify-center text-black text-8xl z-10">
            <FiArrowDownCircle />
          </a>
        </div>
      </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30" onClick={toggleModal}>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-full max-h-full overflow-auto relative" onClick={(e) => e.stopPropagation()}>
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
