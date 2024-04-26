import React from 'react';
import ProgrammerImg from "../assets/programmerImg.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name= "home" 
    className="md-h-screen w-full py-20 text-white bg-gradient-to-r from-sky-950 via-slate-800 to-slate-900">
    {/* background color gradient from top to bottom the middle part will be black then gray*/}
      
      <div className="max-w-screen-lg mx-auto flex flex-col
       items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center">
      <h2 className="text-4xl text-white sm:text-7xl font-bold">
         I'm a Full-Stack Developer
          </h2>
        <p className= "text-white py-8 max-w-md"> 
        I have 4 years of experience building and designing websites.
        I specialize on web application technoligies like ReactJS, Tailwind, 
        Next JS, Typescript and NodeJS. <br/>I'm from Addis Ababa, Ethiopia.
        </p>
        
        <div>
          <Link to="portfolio" smooth duration={500}  className= "group font-medium text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-slate-500 cursor-pointer to-blur-900">
              Portfolio 
              <span className="group-hover:rotate-90 duration-300">
            <BsArrowRightShort size={25} className='ml-l'/>
              </span>
          </Link>
          </div>
        </div>

 {/* image */}
 <div>
        <img 
        src = {ProgrammerImg} 
        alt = "Profile"
        className="rounded-sm mx-auto md:w-full"/>
    </div>
    </div>
    </div>
 
  );
};

export default Home;