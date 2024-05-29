import React from 'react';

interface TableRow {
  year: number;
  period: string;
  subject: string;
  teacher: string;
  grade: number;
  homeworkMissed: number;
}

const data: TableRow[] = [
  { year: 2024, period: "Segundo", subject: "Lengua Española", teacher: "Erika Magaña", grade: 10, homeworkMissed: 2 },
  { year: 2024, period: "Segundo", subject: "Matemáticas", teacher: "Erika Magaña", grade: 10, homeworkMissed: 2 },
  { year: 2024, period: "Segundo", subject: "Ciencias Naturales", teacher: "Erika Magaña", grade: 10, homeworkMissed: 2 },
  { year: 2024, period: "Segundo", subject: "Historia", teacher: "Erika Magaña", grade: 10, homeworkMissed: 2 },
  { year: 2024, period: "Segundo", subject: "Geografía", teacher: "Erika Magaña", grade: 5, homeworkMissed: 2 },
  { year: 2024, period: "Segundo", subject: "Cívica y Ética", teacher: "Erika Magaña", grade: 10, homeworkMissed: 2 },
  { year: 2024, period: "Segundo", subject: "Ed física", teacher: "Erika Magaña", grade: 10, homeworkMissed: 2 },
  { year: 2024, period: "Segundo", subject: "Ed artística", teacher: "Erika Magaña", grade: 10, homeworkMissed: 0 },
];

const Table: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Año</th>
            <th className="px-4 py-2 border">Periodo</th>
            <th className="px-4 py-2 border">Materia</th>
            <th className="px-4 py-2 border">Profesor</th>
            <th className="px-4 py-2 border">Calificación</th>
            <th className="px-4 py-2 border">Faltas de Tarea</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-500 text-white'}>
              <td className="px-4 py-2 border">{row.year}</td>
              <td className="px-4 py-2 border">{row.period}</td>
              <td className="px-4 py-2 border">{row.subject}</td>
              <td className="px-4 py-2 border">{row.teacher}</td>
              <td className={`px-4 py-2 border ${row.grade < 6 ? 'text-red-500': 'text-black'}`}>{row.grade}</td>
              <td className={`px-4 py-2 border ${row.homeworkMissed < 5 ? 'text-red-500' : ''}`}>{row.homeworkMissed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
