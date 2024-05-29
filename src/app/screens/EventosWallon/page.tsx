componenteMaestros
import React from 'react';
import Image from 'next/image';

const activities = [
  {
    src: '/path-to-image/granja.jpg',
    alt: 'Granja Wallon',
    title: 'Granja Wallon',
  },
  {
    src: '/path-to-image/spellingbee.jpg',
    alt: 'Spelling Bee',
    title: 'Spelling Bee',
  },
  {
    src: '/path-to-image/torneo.jpg',
    alt: 'Torneo Interino',
    title: 'Torneo Interino',
  },
  {
    src: '/path-to-image/sixflags.jpg',
    alt: 'Excursión Six Flags',
    title: 'Excursión Six Flags',
  },
];

const ActivitiesGrid: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={activity.src}
                alt={activity.alt}
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <div className="p-4">
                <h2 className="text-center font-semibold text-lg">{activity.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesGrid;
=======
'use client'

import React from "react"
import Header from "@/components/atoms/Header/page"
import burger from "@/components/atoms/burger/page"

const App: React.FC =()=>{
    return(

        <div>
       <Header></Header>

       <div className="grid grid-cols-2 grid-rows-2 h-screen px-64 py-24 gap-16 ">
    <div className=" flex flex-col justify-center items-center">
    <button className="w-full h-full bg-cover bg-center bg-no-repeat mx-auto my-auto ml-0 mr-2 rounded-lg transition-transform duration-300 transform hover:scale-95" style={{ backgroundImage: 'url(/wallonfarm.svg)' }}></button>
    
    <p className="text-center mt-2 font-bold">Granja Wallon</p>
    </div>
    <div className=" flex flex-col justify-center items-center">
    <button className="w-full h-full bg-cover bg-center bg-no-repeat  mx-auto my-auto ml-0 mr-2 rounded-lg transition-transform duration-300 transform hover:scale-95" style={{ backgroundImage: 'url(/wallonspelling.svg)' }}></button>
    <p className="text-center mt-2 font-bold">Spelling Bee</p>
    </div>
    <div className=" flex flex-col justify-center items-center">
    <button className="w-full h-full bg-cover bg-center bg-no-repeat  mx-auto my-auto ml-0 mr-2 rounded-lg transition-transform duration-300 transform hover:scale-95" style={{ backgroundImage: 'url(/wallonfootball.svg)' }}></button>
    <p className="text-center mt-2 font-bold">Torneo Interino</p>
    </div>
    <div className=" flex flex-col justify-center items-center">
    <button className="w-full h-full bg-cover bg-center bg-no-repeat  mx-auto my-auto ml-0 mr-2 rounded-lg transition-transform duration-300 transform hover:scale-95" style={{ backgroundImage: 'url(/wallonsixflags.svg)' }}></button>
    <p className="text-center mt-2 font-bold">Excursión Six Flags</p>
    </div>
</div>

      
</div>
   
    )
}

export default App;
 dev
