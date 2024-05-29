'use client';

import React from 'react';
import Header from '@/components/atoms/Header/page';

const WarningPage: React.FC = () => {
    return (
        <>
        <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <img src="/Alerta.svg" alt="Warning" className="w-64 h-64 mb-4" />
        <p className="text-center text-black">
          Le recordamos que tiene un <span className="text-red-500 font-bold">pago pendiente</span>, para poder acceder al portal wallon y hacer movimientos, favor de pagar sus adeudos a la brevedad.
        </p>
        <p className="text-center text-black">
          Si tiene urgencia de revisar sus documentos o algún tema en específico y no ha pagado, acudir a las instalaciones.
        </p>
        <p className="text-center text-black">
          Si ya pagó y no se ha actualizado, favor de esperar <span className="text-red-500 font-bold">24 horas</span>.
        </p>
      </div>
      </>
    );
  };
  
  export default WarningPage;