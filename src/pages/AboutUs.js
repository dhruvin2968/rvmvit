import React from 'react';
import TeamOverview from './TeamOverview';
import TeamRoles from './TeamRoles';
import Products from './Products';
import UniqueIdeas from './UniqueIdeas';
import Carousel from './Carousel';
import { Grid } from './Grid';
import {Grid2} from './Grid2'
import {Sponsors } from './sponsors';
export const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4">About Us</h2>
        <p className="text-gray-100 text-center mb-12 font-bold text-5xl">Driving the future of automotive engineering</p>
        
        <div className="space-y-20">
          <TeamOverview />
          
        <Grid/>
        <Grid2/>
          <TeamRoles />
          <Products />
          <Carousel />
          <UniqueIdeas />
          <Sponsors />
        </div>
      </div>
    </section>
  );
};

