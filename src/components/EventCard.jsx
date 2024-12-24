import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="px-2 py-1 bg-indigo-600 rounded-full text-xs font-semibold">
            {event.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-extrabold text-black mb-2">{event.title}</h3>
        
        <div className="flex items-center space-x-4 mb-4 text-gray-800">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        <p className="text-gray-800 mb-4">{event.description}</p>

        {event.achievements && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-indigo-600">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-semibold">Achievements</span>
            </div>
            <ul className="list-disc list-inside text-gray-800 ml-2">
              {event.achievements.map((achievement, index) => (
                <li key={index} className="text-sm">{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {event.highlight && (
          <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
            <p className="text-indigo-700 font-semibold text-sm">{event.highlight}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;