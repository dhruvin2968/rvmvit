import React from 'react';
import { Lightbulb, Cloud, Recycle } from 'lucide-react';

const ideas = [
  {
    icon: Lightbulb,
    title: "Generative Design Approach",
    description: "Using generative design for critical motorcycle components, creating lightweight yet strong parts through advanced simulation and iteration."
  },
  {
    icon: Cloud,
    title: "Autodesk Collaboration",
    description: "Leveraging Fusion 360 for sophisticated design simulations and cloud-based collaboration, enabling faster design iterations."
  },
  {
    icon: Recycle,
    title: "Sustainable Innovation",
    description: "Converting scrap vehicles into electric ones, combining sustainability with cutting-edge engineering solutions."
  }
];

const UniqueIdeas = () => {
  return (
    <div className="bg-black py-16">
      <h3 className="text-4xl text-white font-black text-center mb-12">
        Unique Ideas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-8">
        {ideas.map((idea, index) => (
          <div key={index} className="relative group">
            {/* Background Gradient on Hover */}
            
            {/* Idea Card */}
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-xl p-8 hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
         >
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <idea.icon className="h-12 w-12 text-orange-500" />
              </div>
              {/* Title */}
              <h4 className="text-xl text-white font-semibold mb-4 text-center">{idea.title}</h4>
              {/* Description */}
              <p className="text-gray-300 text-center">{idea.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueIdeas;
