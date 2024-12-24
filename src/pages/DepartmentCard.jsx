import React from 'react';

const DepartmentCard = ({ icon: Icon, title, description, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-500">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-Redd/20 group-hover:bg-Redd/30 transition-colors">
            <Icon className="h-6 w-6 text-Redd" />
          </div>
          <h4 className="text-xl font-bold">{title}</h4>
        </div>

        <p className="text-gray-300 flex-grow">{description}</p>

        
      </div>
    </div>
  );
};

export default DepartmentCard;