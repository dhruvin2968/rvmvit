import React from 'react';
import BgVideo from '../components/BgVideo';
import { AboutUs } from './AboutUs';

import { useEffect } from 'react';
export const Home = () => {
  useEffect(() => {
      document.title = `RevMechanics - Rev Till You Die`;
    });
  return (
    <>
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-black">
        <BgVideo />
        
        {/* Overlay for a darker effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-black md:text-8xl mb-6 animate-fade-in leading-tight">
           
            <span className="bg-gradient-to-r font-serif  from-yellow-500 via-Redd to-yellow-500 bg-clip-text text-transparent">
              REV MECHANICS
            </span>
          </h1>
          <p className="text-3xl max-w-4xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay leading-relaxed">
            Pushing the boundaries of automotive excellence through innovation and passion
          </p>
          <a
            href="/revmechanics.pdf"
            download="REV_Mechanics_Brochure.pdf"
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow-lg text-lg font-semibold text-white hover:scale-105 transform transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      <AboutUs />
    </>
  );
};
