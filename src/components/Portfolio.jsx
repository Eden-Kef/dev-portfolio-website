import React from 'react';
import arrayDestruct from "../assets/portfolio/SLBScreen.JPG";
import installNode from "../assets/portfolio/edclear.JPG";
import navbar from "../assets/portfolio/ride.JPG";
import reactParallax from "../assets/portfolio/sosi.JPG";
//mport reactSmooth from "../assets/portfolio/reactSmooth.jpg";

const Portfolio = () => {
    const portfolios = [
    {
        id:1,
        src:arrayDestruct,
        url: 'https://slbtradingplc.com/',
    },
    {
        id:2,
        src:installNode,
        url: 'https://edclearphotography.netlify.app/'
    },
    {
        id:3,
        src:navbar,
        url: 'https://riderentals.netlify.app/'
    },
    {
        id:4,
        src:reactParallax,
        url: 'https://github.com/Eden-Kef/portfolio_biochemist'
    },
   
]
  return (
    <div name="portfolio" 
    className="w-full md-h-screen py-20 bg-gradient-to-r from-sky-950 via-slate-800 to-slate-900">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-6'>
        <p className="text-4xl text-white font-bold inline border-b-4 border-gray-200">Portfolio</p>
        <br/>
        <p className="py-6 text-white">Here are some of my work.</p>
    </div> 
    <div 
         className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
    {portfolios.map(({ id, src, url }) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src}  alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <a href={url} className='w-1/2 text-white px-16 py-3 m-4 duration-200 hover:scale-105'> Link </a>
                   {/* <a href className='w-1/2 text-white px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>*/}
                </div>
             </div>
        ))}
          </div>
       </div>
    </div>

  );
};
export default Portfolio;