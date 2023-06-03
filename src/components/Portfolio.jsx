import React from 'react';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";

const Portfolio = () => {
    const portfolios = [
    {
        id:1,
        src:arrayDestruct
    },
    {
        id:2,
        src:installNode
    },
    {
        id:3,
        src:navbar
    },
    {
        id:4,
        src:reactParallax
    },
    {
        id:5,
        src:reactSmooth
    }

]
  return (
    <div name="portfolio" 
    className="w-full md-h-screen py-20 bg-gradient-to-r from-slate-700 via-slate-700 to-slate-800">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-6'>
        <p className="text-4xl text-white font-bold inline border-b-4 border-gray-200">Portfolio</p>
        <br/>
        <p className="py-6 text-white">Here are some of my work.</p>
    </div> 
    <div 
         className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
    {portfolios.map(({ id, src }) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 text-white px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 text-white px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
             </div>
        ))}
          </div>
       </div>
    </div>

  );
};
export default Portfolio;