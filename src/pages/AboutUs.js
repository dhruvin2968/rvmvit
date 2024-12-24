import React from "react";
import TeamOverview from "../components/TeamOverview";
import TeamRoles from "../components/TeamRoles";
import Products from "../components/Products";
import UniqueIdeas from "../components/UniqueIdeas";
import Carousel from "../components/Carousel";
import { Grid } from "../components/Grid";
import { Grid2 } from "../components/Grid2";
import { Sponsors } from "../components/sponsors";
export const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4">About Us</h2>
        <p className="text-gray-100 text-center mb-12 font-bold text-5xl">
          Driving the future of automotive engineering
        </p>

        <div className="space-y-20">
          <TeamOverview />
          <Grid />
          <Grid2 />
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
