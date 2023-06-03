import React from 'react';

const About = () => {
  return (
    <div name = "about" className="w-full h-screen bg-gradient-to-r from-slate-800 via-slate-700 to-slate-700">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
      <p className='text-4xl text-white font-bold inline border-b-4'>About</p>
        </div>
        <p className='text-xl text-white mt-10'>
        Hi, my name is Samuel, and I am a Full-Stack JavaScript developer. 
        I enjoy working on the back-end as much as on the front-end.
        I am always looking forward to learn more.
        </p>
        <br/>
        <p className='text-xl text-white'>
        I am always looking forward to learn more.
        </p>
      </div>
    </div>
  )
};

export default About;