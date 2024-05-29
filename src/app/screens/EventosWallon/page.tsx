'use client'

import React from "react"
import Header from "@/components/atoms/Header/page"
import BurgerMenu from "@/components/atoms/burger/page"

const App: React.FC =()=>{
    return(

        <div>
       <Header></Header>
       <BurgerMenu />

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
