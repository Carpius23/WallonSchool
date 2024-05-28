'use client'; 
import React from 'react';
import Header from '@/components/atoms/Header/page';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="flex justify-center items-center h-screen">
                    <div className="relative w-[1000px] h-[500px] overflow-hidden">
                        <Image
                            src="/Rectangle 5.png"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                        />
                        <a
                            href="/prueba.pdf"
                            download
                            className="absolute top-4 right-4 text-black text-9xl"
                        >
                            <FiArrowDownCircle />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
