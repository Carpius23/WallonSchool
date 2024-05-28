import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';  

const DocumentComponent = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <Image
        src="/Rectangle 5.png" 
        alt="Document"
        layout="responsive"
        width={901}  
        height={487} 
      />
      <a
        href="/prueba.pdf" 
        download
        style={{
          position: 'absolute',
          top: '20px', 
          right: '20px', 
          color: 'white', 
          fontSize: '24px', 
        }}
      >
        <FiArrowDownCircle />  // Usando el nuevo ícono
      </a>
    </div>
  );
};

export default DocumentComponent;