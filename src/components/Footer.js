import {Link}from "react-router-dom";

import { Instagram, Linkedin } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-200"><Link to="/" className="hover:underline">© All Rights Reserved</Link></span>
        
        <span className="text-black dark:text-white">Made With <span className="text-Redd">♥ </span>By RevMechanics</span>
        
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/rev_mechanics/" target="_blank" rel="noreferrer" className=" hover:text-Redd me-4 md:me-6"><Instagram className="w-6 h-6" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/revmechanics/?originalSubdomain=in" target="_blank" rel="noreferrer" className=" hover:text-blue-600 me-4 md:me-6"> <Linkedin className="w-6 ml-6 h-6" /></a>
          </li>
          
        </ul>
      </div>

    </footer>
  )
}
