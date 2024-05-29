'use client';

import React from 'react';
import Header from '@/components/atoms/Header/page';

const WarningPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
                <img src="/Alerta.svg" alt="Warning" className="w-32 h-32 mb-4" />
                <p className="text-center text-black px-4">
                    Le recordamos que tiene un <span className="text-red-500 font-bold">pago pendiente</span>, para poder acceder al portal wallon y hacer movimientos, favor de pagar sus adeudos a la brevedad.
                </p>
                <p className="text-center text-black px-4">
                    Si tiene urgencia de revisar sus documentos o algún tema en específico y no ha pagado, acudir a las instalaciones.
                </p>
                <p className="text-center text-black px-4">
                    Si ya pagó y no se ha actualizado, favor de esperar <span className="text-red-500 font-bold">24 horas</span>.
                </p>
            </div>
        </>
    );
};

export default WarningPage;
