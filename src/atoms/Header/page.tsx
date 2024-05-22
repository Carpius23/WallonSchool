'use client';

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-customBlue text-white flex items-center p-4">
      <div className="flex items-center">
        <img src="/logowallon.svg" alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-lg font-bold">Portal Wallon</h1>
      </div>
    </header>
  );
};

export default Header;
