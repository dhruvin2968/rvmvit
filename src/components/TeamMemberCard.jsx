import React from 'react';
import { Instagram, Linkedin, Phone } from 'lucide-react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-gradient-to-r from-white via-gray-200 to-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-Redd font-semibold mt-1">{member.role}</p>
        
        <div className="mt-4 flex items-center font-semibold justify-center space-x-2">
          <a href={`tel:${member.phone}`} className="flex items-center text-gray-600 hover:text-gray-800">
            <Phone className="w-5 h-5 mr-2" />
            <span className="text-sm">{member.phone}</span>
          </a>
        </div>
        
        <div className="mt-4 flex justify-center space-x-4">
          {member.instagram && (
            <a
              href={member.instagram}
              className="text-Redd  hover:text-red-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="text-blue-600 hover:text-blue-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;