import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img className= "mb-16" src="/wallon.svg" alt="Wallon-Logo" />
      <div className="h-full max-h-sm w-full max-w-sm rounded-lg">
        <form className="bg-white border border-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 text-center">
            <img src='/Login.svg' alt="Login-Image" className="w-26 h-25 mx-auto" />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-customLightBlue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-customLightBlue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="text-center mt-4">
            <a
              className="text-gray-500 hover:text-customLightBlue text-xs"
              href="#"
            >
              ¿Olvidaste tu usuario y/o contraseña? Da clic aquí
            </a>
          </div>
          <div className="flex items-center justify-center mt-4">
            <a
              className='bg-transparent text-black border border-black px-4 py-2 rounded hover:bg-customLightBlue hover:text-white transition duration-200 ease-in-out' 
              href="">Iniciar sesión</a>
          </div>
        </form>
      </div>
      <p className="text-center text-gray-500 text-xs mt-4">
        Si tienes algún problema, comunicate al siguiente correo: dirección@iw.edu.mx
      </p>
    </div>
  );
};

export default App;