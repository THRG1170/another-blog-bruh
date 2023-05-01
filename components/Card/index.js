import React from 'react';
import './tilsjs';

export default function (props) {
    const {cards} = props;

    if (typeof document === 'undefined') {
      // during server evaluation
  } else {
    VanillaTilt.init(document.querySelector("#card"), {
      max: 25,
      speed: 800,
    });
    
    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll("#card"));
  }
  return (
    <div className='flex flex-row flex-wrap gap-10 justify-center mb-24 md:mb-64 md:gap-28'>
      {cards.map((card) => {
        return (
        <div className='flex justify-center flex-col w-[300px] bg-secondary rounded overflow-hidden cursor-pointer transition-all hover:shadow-[0_12px_26px_0_rgba(0,0,0,0.2)]' id='card'>
          <img src={card.image} alt={card.altImage}/>
          <div className='p-2 flex flex-col justify-center text-center'>
            <h1 className='text-lg font-bold font-ubuntu'>{card.title}</h1>
            <p className='my-4 mb-4 font-thin '>{card.paragraph}</p>
            <a href={card.href} className='flex items-center justify-center h-8 text-sm w-1/2 mx-auto rounded bg-primary font-ubuntu mb-4 hover:bg-blue-950 transition-all ease-in-out'>{card.btnText}</a>
          </div>
        </div>
        )
      })}
    </div>
  )
}
