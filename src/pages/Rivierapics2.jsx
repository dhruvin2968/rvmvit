import React from 'react';
const images = [
  
  '/r5.jpg',
  '/r7.jpg',
  '/r6.jpg',
  '/r4.jpg'
  
];

export const Rivierapics2= () => {
  return (
    <div className="masonry-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       {images.map((image, index) => (
        <div key={index} className="masonry-item bg-gray-900 rounded-lg overflow-hidden">
          <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};
