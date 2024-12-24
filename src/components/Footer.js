import {Link}from "react-router-dom";

import { Instagram, Linkedin } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <div className="flex flex-col items-center md:flex-row md:space-x-4 justify-center">
      <span className="text-sm text-gray-500 dark:text-gray-200">
        <Link to="/" className="hover:underline">© All Rights Reserved</Link>
      </span>
      </div>
      <div  className="flex flex-col items-center md:flex-row md:space-x-4 justify-center">
      <span className="text-black dark:text-white md:ml-4 pt-2 md:pt-0">
        Made With <span className="text-Redd">♥</span> By RevMechanics
      </span>
      </div>
    
    <ul className="flex flex-row items-center justify-center mt-3 space-y-2 text-sm font-medium text-gray-400 dark:text-gray-400 md:mt-0 md:flex-row md:space-y-0 md:space-x-6">
      <li  className="hover:text-blue-600 pl-8 md:pl-0">
        <a href="https://www.instagram.com/rev_mechanics/" target="_blank" rel="noreferrer" className="hover:text-Redd ">
          <Instagram className="w-6 h-6" />
        </a>
      </li>
      <li  className="hover:text-blue-600 pl-8 pb-3 md:pb-0 md:pl-0">
        <a href="https://www.linkedin.com/company/revmechanics/?originalSubdomain=in" target="_blank" rel="noreferrer" className="hover:text-blue-600">
          <Linkedin className="w-6 h-6" />
        </a>
      </li>
    </ul>
  </div>
</footer>

  )
}
