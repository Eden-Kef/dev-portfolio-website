import React from 'react';

const About = () => {
  return (
    <div name = "about" className="w-full h-screen bg-gradient-to-r from-slate-800 via-slate-700 to-slate-700">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
      <p className='text-4xl text-white font-bold inline border-b-4'>About</p>
        </div>
        <p className='text-xl text-white mt-10 text-justify tracking-wide'>
          Hi, my name is Samuel Wondimu. I am a Full-Stack developer. <br></br>
          I am a full time developer with over four years of experience in web development and mobile <br/>development. 
        </p>
        <br/>
        <p className ='text-xl text-white'> I have worked on various projects using technologies such as React, Node.js, NextJs and SQL. 
          I enjoy creating user-friendly and responsive applications that solve real-world problems.
          </p>
         <br/>
        <p className='text-xl text-white'>
        I am always eager to learn new skills and tools, and I am passionate about delivering high-quality code <br/>and products.
        I am always looking forward to learn more.
        </p>
      </div>
    </div>
  )
};

export default About;