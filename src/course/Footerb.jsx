import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
function Footerb() {
return (
  <>
    <div className=' back w-[100%] border-1 border-black p-2 flex justify-center gap-[24%] mt-20 '>
        <div className=' ml-14 text-gray-500 mt-1'><p>Copyright © 2025 Zinmatt.com | Powered by ZINMATT PRIVATE LIMITED</p></div>
        <div className=''>
            <ul className='flex gap-1 p-2 mr-32 text-white '>           
            <li className=' ml-1 hover:text-green-500 text-lg '><FaFacebook  className='h-6 w-6 bg-black p-1'/></li>
            <li className=' ml-1 hover:text-green-500 text-lg '><AiOutlineInstagram  className='h-6 w-6 bg-black p-1'/></li>
            <li className=' ml-1 hover:text-green-500 text-lg'><FaLinkedin className='h-6 w-6 bg-black p-1'/></li>
            <li className=' ml-1 hover:text-green-500 text-lg'><FaPinterest className='h-6 w-6 bg-black p-1' /></li>  
            <li className=' ml-1 hover:text-green-500 text-lg'><FaYoutube  className='h-6 w-6 bg-black p-1' /></li>
            </ul>
        </div>
    </div>
  </>
  )
}
export default Footerb