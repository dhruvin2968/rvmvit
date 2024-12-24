import React from 'react';
import { Zap, Bike, Battery } from 'lucide-react';

const products = [
  {
    icon: Battery,
    title: "Super EV for Racing",
    status: "In Development",
    description: "Our latest project aimed at creating a Super EV for competitive racing. Successfully developed battery pack and motor, focusing on performance and efficiency."
  },
  {
    icon: Zap,
    title: "Revived Electric Scooter",
    status: "Completed",
    description: "Transformed an old scooter into a fully functional electric vehicle, focusing on sustainability and style."
  },
  {
    icon: Bike,
    title: "MotoStudent IC Bike",
    status: "Completed",
    description: "Internal combustion superbike designed for MotoStudent Spain, optimized using Autodesk Fusion 360."
  }
];

const Products = () => {
  return (
    <div className="bg-black pb-10">
      <h3 className="text-4xl text-white font-black text-center mb-12">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-8">
        {products.map((product, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-xl p-8 hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`text-sm px-3 py-1 rounded-full ${
                product.status === "Completed"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}>
                {product.status}
              </span>
            </div>
            
            {/* Product Icon */}
            <div className="flex items-center justify-center mb-6">
              <product.icon className="h-12 w-12 text-orange-500" />
            </div>
            
            {/* Product Title */}
            <h4 className="text-xl text-white font-semibold mb-4 text-center">{product.title}</h4>
            
            {/* Product Description */}
            <p className="text-gray-300 text-center">{product.description}</p>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
