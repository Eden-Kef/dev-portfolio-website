import React from 'react';

const About = () => {
  return (
    <div name = "about" className="w-full md-h-screen py-20 bg-gradient-to-r from-sky-950 via-slate-800 to-slate-900">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
      <p className='text-4xl text-white font-bold inline border-b-4'>About</p>
        </div>
        <p className='text-white mt-10 text-justify tracking-wide'>
          Hi, my name is Eden Kefale. I am a Full-Stack developer. <br></br>
          I am a full time developer with over four years of experience in web development.
        </p>
        <br/>
        <p className ='text-white'> I have worked on various projects using technologies such as React, Node.js, and NextJs. 
          I enjoy creating user-friendly and responsive applications that solve real-world problems.
          </p>
         <br/>
        <p className='text-white'>
        I am always eager to learn new skills and tools, and I am passionate about delivering high-quality code <br/>and products.
        I am always looking forward to learn more.
        </p>
      </div>
    </div>
  )
};

export default About;