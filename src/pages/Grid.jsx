import React, { useState } from 'react';

const images = [
    '/x.jpg',
    '/y.jpg',
    '/z.jpg',
   
    
  ];

export const Grid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
         <div className="flex items-center justify-center pb-3">
      <span className="text-white text-4xl font-black text-center">
        Our first prototype 
        <p className="text-Redd font-serif text-3xl font-bold text-center">REV 18</p>
      </span>
    </div>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="modal-content relative bg-white rounded-lg p-6">
            <img src={currentImage} alt="" className="max-w-full max-h-screen object-contain" />
            <button onClick={closeModal} className="absolute top-4 right-4 text-white text-xl">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grid;
