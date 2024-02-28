import React from 'react';
import homeLogo from '../../assets/home.jpeg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-sky-400 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo a farmácia!</h2>
              <p className='text-xl'>O que você precisa?</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-sky-500 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center  ">
              <img src={homeLogo} alt="" className='w-2/3' class="rounded-full"/>
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;