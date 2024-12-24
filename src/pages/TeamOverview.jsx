import React from 'react';
import { GraduationCap, Wrench, Trophy } from 'lucide-react';

const TeamOverview = () => {
  return (
    <div className="prose prose-invert  py-12">
      <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-xl p-8 hover:bg-gray-700 transition-all transform shadow-lg">
        {/* Icon Highlights Section */}
        <div className="flex flex-wrap gap-8 justify-center mb-12">
          {[
            { icon: GraduationCap, text: "VIT Vellore Students" },
            { icon: Wrench, text: "Engineering Innovation" },
            { icon: Trophy, text: "MotoStudent Spain" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-800/50 px-4 py-3 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
            >
              <item.icon className="h-8 w-8 text-orange-500" />
              <span className="text-gray-200 font-semibold">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Team Description Section */}
        <p className="text-lg text-justify text-gray-300 leading-relaxed mb-6">
          India's first MotoStudent team, <span className="font-bold text-white">Rev Mechanics</span>, is VIT’s only bike racing team. Founded in 2016 by a group of passionate students, we specialize in building racing prototypes for both national and international competitions. Our focus is on creating high-performance IC bikes that stand at par with global standards in innovation and engineering.
        </p>
        <p className="text-lg text-justify text-gray-300 leading-relaxed mb-6">
          With the aim of leveraging all available resources—both technical and intellectual—we strive to design race bikes that excel in performance and innovation. By taking on this challenge, we not only seek to broaden our knowledge and refine our skills but also to exceed expectations and leave a lasting mark on the competition stage.
        </p>
        <p className="text-lg text-justify text-gray-300 leading-relaxed">
          Our ultimate goal is to shape the future of the automotive world by developing cutting-edge motorcycles that embody the spirit of competition and sustainability. By fostering technical skills, collaboration, and resilience, Rev Mechanics prepares its team members for the challenges of the automotive industry, empowering them to become leaders who will redefine the future of mobility.
        </p>
      </div>
    </div>
  );
};

export default TeamOverview;
