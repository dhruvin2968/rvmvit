import React, { useState } from 'react';

const images = [
    '/newproto.jpg',
   
    
  ];

export const Grid2 = () => {
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
      Presenting our latest prototype for MotoStudent 2025
      <p className="text-white text-xl font-semibold text-center p-2">A sleek and powerful 250cc IC prototype designed to revolutionize performance and engineering excellence! 🚀✨</p>
     
       </span>
       
    </div>
      <div className="gallery-grid grid items-center justify-center">
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
      <p className="text-Redd text-3xl font-bold font-serif text-center pt-8">REV GENESIS 
     - Beginning of a new era</p>

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

export default Grid2;
