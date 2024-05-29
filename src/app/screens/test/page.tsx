'use client';
import BurgerMenu from "@/components/atoms/burger/Page";
import Table from "@/components/atoms/tabla/tabla";
const Test: React.FC = () => {
    return (
       <div>
          < BurgerMenu/>
        <div className="container mx-auto p-8">
          
      <h1 className="text-2xl font-bold mb-4">Tabla de Calificaciones</h1>
      <Table />
    </div>
    </div>
    );
};

export default Test;



