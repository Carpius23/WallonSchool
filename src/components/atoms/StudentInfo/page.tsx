"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import users from '@/server/users'; // Adjust the path according to your project structure
import grades from '@/server/grades'; // Adjust the path according to your project structure

const StudentInfo: React.FC = () => {
  const [userGrades, setUserGrades] = useState([]);


    

  const user = users.find(u => u.id === (JSON.parse(localStorage.getItem('userSession') || '{}')).id);

  if (!user) return <div>No user found</div>;
else
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <Image
            src={user.foto} // Use user's photo path
            alt={user.nombre}
            width={100}
            height={120}
            className="rounded-lg"
          />
        </div>
        <div>
          <p classname = "font-semibold ">{user.nombre}</p>
          <p>Grado: {user.grado} de primaria</p>
          <p>Grupo: {user.grupo}</p>
        </div>
      </div>
      
    </div>
  );
};

export default StudentInfo;

