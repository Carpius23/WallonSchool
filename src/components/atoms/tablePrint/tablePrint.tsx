"use client";
import React, { useState, useEffect } from "react";
import grades from "@/server/grades";
import StudentInfo from "@/components/atoms/StudentInfo/page";

interface TableRow {
  subject: string;
  teacher: string;
  grade: number;
  homeworkMissed: number;
}

const TablePrint: React.FC = () => {
  const [userGrades, setUserGrades] = useState<TableRow[]>([]);

  useEffect(() => {
    // Obtener los datos del usuario del local storage
    const userData = JSON.parse(localStorage.getItem("userSession") || "{}");
    const userGradesData =
      grades.find((g) => g.id === userData.id)?.materias.map((m) => ({
        subject: m.name,
        teacher: m.profesor,
        grade: m.calificacion,
        homeworkMissed: m.faltasTarea,
      })) || [];

    setUserGrades(userGradesData);
  }, []);

  return (

    <div id="table-to-pdf" className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center mb-8">INSTITUTO WALLON</h1>
      <div className="flex items-center justify-between mb-8">
        <StudentInfo />
        <div className="flex items-center">
          <img src="/logowallon.svg" alt="Logo" className="w-32 h-32 mr-4" />
        </div>
      </div>
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Tabla de Calificaciones</h1>
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border rounded-tl-lg text-center">Materia</th>
              <th className="px-4 py-2 border text-center">Profesor</th>
              <th className="px-4 py-2 border text-center">Calificación</th>
              <th className="px-4 py-2 border text-center rounded-tr-lg">
                Faltas de Tarea
              </th>
            </tr>
          </thead>
          <tbody>
            {userGrades.map((row, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                }
              >
                <td className="px-4 py-4 border text-center">{row.subject}</td>
                <td className="px-4 py-4 border text-center">{row.teacher}</td>
                <td
                  className={`px-4 py-4 border text-center ${
                    row.grade < 6 ? "text-red-500" : "text-black"
                  }`}
                >
                  {row.grade}
                </td>
                <td
                  className={`px-4 py-4 border text-center ${
                    row.homeworkMissed > 0 ? "text-red-500" : ""
                  }`}
                >
                  {row.homeworkMissed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-32">
        <div className="flex justify-between mt-8">
          <div className="text-center">
            <div className="border-t-2 border-black pt-2 w-80 mx-auto"></div>
            <p className="mt-2 font-medium">Firma del Maestro</p>
          </div>
          <div className="text-center">
            <div className="border-t-2 border-black pt-2 w-80 mx-auto"></div>
            <p className="mt-2 font-medium">Firma del Padre/Tutor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePrint;
