import React from 'react';
import { Ruler, Cpu, Cog, Wrench, Wind, ClipboardList } from 'lucide-react';
const roles = [
  {
    icon: Ruler,
    title: "Design Engineers",
    description: "Focused on designing various components using Autodesk's Fusion 360, iterating designs for swingarm, chassis, and triple fork."
  },
  {
    icon: Cpu,
    title: "Simulation and Testing",
    description: "Perform stress tests, heat analysis, and vibration impact tests using simulation tools."
  },
  {
    icon: Cog,
    title: "Powertrain Specialists",
    description: "Develop and test powertrains, balancing acceleration, torque, and top speed for optimal performance."
  },
  {
    icon: Wrench,
    title: "Manufacturing and Assembly",
    description: "Translate designs into physical products, specializing in complex components like carbon fiber parts."
  },
  {
    icon: Wind,
    title: "Aerodynamics Engineers",
    description: "Optimize aerodynamics to reduce drag and improve track performance."
  },
  {
    icon: ClipboardList,
    title: "Project Managers",
    description: "Coordinate between departments and manage competition participation."
  }
];

const TeamRoles = () => {
   
  return (
    <div className="bg-black pb-16">
      <h3 className="text-4xl text-white font-black text-center mb-12">
        Team Roles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-xl p-8 hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-center mb-6">
              <role.icon className="h-12 w-12 text-orange-500" />
            </div>
            <h4 className="text-xl text-white font-semibold mb-4 text-center">{role.title}</h4>
            <p className="text-gray-300 text-center">{role.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TeamRoles;
