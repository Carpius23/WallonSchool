'use client';

import React from 'react';

const Header: React.FC = () => {
  return (  
    <nav className="bg-customBlue text-white flex items-center p-4 h-24">
    <header >
      <div className="flex items-center">
        <img src="/logowallon.svg" alt="Logo" className="mr-8 w-16 h-16 mr-2" />
        <h1 className="text-3xl font-bold">PORTAL WALLON</h1>
      </div>
    </header>
    </nav>
  );
};

export default Header;
