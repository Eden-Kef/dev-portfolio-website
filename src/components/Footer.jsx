import React from "react";
import { BiCopyright } from "react-icons/bi";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <div name ="contact"
    className="md:flex md-h-screen w-full py-2 items-center justify-center text-white bg-gradient-to-r from-sky-950 via-slate-800 to-slate-900">
       <Link className= "group font-medium text-slate-300 w-fit flex items-center justify-center cursor-pointer mx-auto">
            <span className="group">
              <BiCopyright size={25} className="mr-2"/>
            </span>  
              Eden Kefale 2023
        </Link>       
    
        </div>
  )
}

export default Footer;