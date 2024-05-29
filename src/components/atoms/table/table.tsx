import React, { useState, useEffect } from 'react';
import grades from '@/server/grades'

interface TableRow {
  subject: string;
  teacher: string;
  grade: number;
  homeworkMissed: number;
}

const Table: React.FC = () => {
  const [userGrades, setUserGrades] = useState<TableRow[]>([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userSession') || '{}');
    const userGradesData = grades.find(g => g.id === userData.id)?.materias.map(m => ({
      subject: m.name,
      teacher: m.profesor,
      grade: m.calificacion,
      homeworkMissed: m.faltasTarea
    })) || [];

    setUserGrades(userGradesData);
  }, []);

  return (
    <div id="table-to-pdf" className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className='bg-smoke'>
          <tr>
            <th className="px-4 py-2 border rounded-tl-lg text-center">Materia</th>
            <th className="px-4 py-2 border text-center">Profesor</th>
            <th className="px-4 py-2 border text-center">Calificación</th>
            <th className="px-4 py-2 border text-center rounded-tr-lg">Faltas de Tarea</th>
          </tr>
        </thead>
        <tbody>
          {userGrades.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-customLightBlue' : 'bg-customLigthLightBlue text-black'}>
              <td className="px-4 py-4 border text-center">{row.subject}</td>
              <td className="px-4 py-4 border text-center">{row.teacher}</td>
              <td className={`px-4 py-4 border text-center ${row.grade < 6 ? 'text-red-500' : 'text-black'}`}>{row.grade}</td>
              <td className={`px-4 py-4 border text-center ${row.homeworkMissed > 0 ? 'text-red-500' : ''}`}>{row.homeworkMissed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

