import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Contact = () => {
    const links = [
      {
        id: 1,
        child: (
            <>
          <FaLinkedin size ={25} />
        </>
        ),
        href: 'https://linkedin.com',
        style: 'rounded-tr-md'
    },
      {
          id: 2,
          child: (
              <>
            <FaGithub size ={25} />
          </>
          ),
          href: 'https://github.com',
      },
      {
          id: 3,
          child: (
              <>
            <HiOutlineMail size ={25} />
          </>
          ),
          href: 'mailto:foo@gmail.com',
      },
      {
          id: 4,
          child: (
              <> 
            <BsFillPersonLinesFill size = {25} />
          </>
          ),
          href: '/resume.pdf',
          style: "rounded-br-md",
          download: true,
      },
      ];
  return (
    <div name ="contact"
    className='md-h-screen w-full py-20 text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-200">Contact</p>
          <br/>
          <p className='py-6'>Get in touch with Me</p>  
        </div>
        <div className='flex justify-center place-items-center'>
          <form action="" className='flex flex-col  w-full md:w-1/2'>
          <input type='text' name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
          <input type='text' name='email' placeholder='Enter Your Email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
          <textarea 
           name = "message"
           rows = "10"
           placeholder='Enter Your Message'
           className='p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none'>
          </textarea>
            <button className='text-white bg-gradient-to-b from-slate-500 via-slate-400 to-slate-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Let's Talk</button>
            
           </form>
        </div>
      </div>
      <div></div>
      <div className="flex flex-row items-center justify-center">
        {links.map(({id, child, href, download}) => (
            <div key={id}
             className=
                "lg:hidden flex flex-row w-10 h-10 px-2"  
                >
                <a 
                href = {href} 
                className= "flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
                >
               {child}
             </a>
            </div>    
        ))
        } 
        </div>
    </div>
  )
}

export default Contact;