'use client';

import React, { useState } from 'react';
import  users  from '@/server/users'

interface User {
  id: number;
  nombre: string;
  usuario: string;
  contraseña: string;
  grupo: number;
  grado: number;
  periodo: number;
}

const App: React.FC = () => {
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usuario = event.currentTarget.usuario.value;
    const contraseña = event.currentTarget.contraseña.value;


    const user: User | undefined = users.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (user) {
      setLoginError('');
      window.location.href = 'https://www.youtube.com/'; 
    } else {
      setLoginError('Usuario o contraseña incorrectos');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img className="mb-16" src="/wallon.svg" alt="Wallon-Logo" />
      <div className="h-full max-h-sm w-full max-w-sm rounded-lg">
        <form onSubmit={handleSubmit} className="bg-white border border-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 text-center">
            <img src='/Login.svg' alt="Login-Image" className="w-26 h-25 mx-auto" />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-customLightBlue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usuario"
              name="usuario"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-customLightBlue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contraseña"
              name="contraseña"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className='bg-transparent text-black border border-black px-4 py-2 rounded hover:bg-customLightBlue hover:text-white transition duration-200 ease-in-out'>
              Iniciar sesión
            </button>
          </div>
          {loginError && <p className="text-center mt-4 text-red-500">{loginError}</p>}
        </form>
      </div>
      <p className="text-center text-gray-500 text-xs mt-4">
        Si tienes algún problema, comunícate al siguiente correo: dirección@iw.edu.mx
      </p>
    </div>
  );
};

export default App;
