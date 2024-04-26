import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => { 
   const [nav, setNav] = useState(false);
   const links = [ 
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "portfolio",
        },
        {
            id: 3,
            link: "about",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
      }
    ]
  return (
  
    <div className="flex justify-between items-center w-full h-20 px-4 text-white scroll bg-gradient-to-r from-sky-950 via-slate-800 to-slate-900">
      <div>
        <h1 className = "text-4xl font-signature ml-2 "> Eden Kefale </h1>
      </div>
      <ul className = "hidden md:flex">  {/*navbar*/}
        {links.map(({ id, link }) => (
      
      <li key={id} 
          className="px-2 mr-6 cursor-pointer capitalize text-gray-200 hover:scale-105 duration-200">
      <Link to = {link} smooth={true} duration={500}>
        {link}
      </Link>
        </li>
        ))}
      </ul>
      
      <div 
        onClick={() => setNav(!nav)} className = "cursor-pointer pr-4 z-10 text-gray-500 md:hidden">  {/*md:hidden hide the hamburger icon when it's medium*/}
        {nav ? <FaTimes size={30}/> : <FaBars size = {20}/>}
      </div>
    {nav && (
      <ul className= "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
        <li 
            key={id} 
            className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link 
            onClick ={() => setNav(!nav)}
            to={link} smooth={true} duration={500}>
        {link}
      </Link>
        </li>
        ))}
      </ul>
      )}
      </div>
  ); 
}

export default NavBar;
