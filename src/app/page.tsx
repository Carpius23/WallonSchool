'use client'

import React, { useState } from 'react';
import users from '@/server/users';
import Modal from '@/components/atoms/ModalLogin/ModalLogin';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveUserSession = (user: User) => {
    localStorage.setItem('userSession', JSON.stringify(user));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usuario = event.currentTarget.usuario.value;
    const contraseña = event.currentTarget.contraseña.value;

    const user: User | undefined = users.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (user) {
      saveUserSession(user);
      setLoginError('');
      window.location.href = '/screens/PortalWallonIndex';
    } else {
      setLoginError('Usuario o contraseña incorrectos');
    }
  };

  const openModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

          <div className='flex justify-center text-customGrey'>
            <p className='mr-2 text-xs'>¿Olvidaste tu usuario y/o contraseña?</p>
            <div className="h-fit w-fit flex justify-center items-center transition-opacity duration-300">
              <button
                className="underline bg-transparent text-gray-600 hover:text-blue-700 cursor-pointer text-xs"
                onClick={openModal}
              >
                Da clic aquí
              </button>
            </div>
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='px-32 py-16'>
          <h2 className="text-4xl mb-16 text-center">¿Cuáles son tus datos?</h2>
          <p className="mb-4">
            Tu usuario por defecto es el primer nombre de su hijo, seguido por las
            dos primeras letras de cada apellido.
          </p>
          <p className="mb-4">
            Por ejemplo: “Juan Carlos Contreras Zúñiga”
            <br />
            Usuario: juanconzun
          </p>
          <p className="mb-4">
            Su contraseña por defecto será igual al usuario seguido de su fecha de
            nacimiento sin espacios:
          </p>
          <p className="mb-4">
            Por Ejemplo: “Nacido el 14 de septiembre de 2002”
            <br />
            Contraseña: juanconzun14092002
          </p>
          <p>
            Teniendo como contraseña y usuario para el siguiente alumno:
            <br />
            Usuario: juanconzun
            <br />
            Contraseña: juanconzun14092002
          </p>
        </div>
      </Modal>

      <p className="text-center text-gray-500 text-xs mt-4">
        Si tienes algún problema, comunícate al siguiente correo: dirección@iw.edu.mx
      </p>
    </div>
  );
};

export default App;
