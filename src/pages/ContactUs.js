import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { useState } from 'react';
export const ContactUs = () => {
  const teamMembers = [
    {
      name: "Krishnadev Edamana",
      role: "Team Captain & Powertrain Head",
      phone: "+91 78239 47773",
      instagram: "https://www.instagram.com/e_krishnadev?igsh=MTd3ZGc0Mmgzb2JpbQ==",
      linkedin: "https://www.linkedin.com/in/krishnadev-edamana-978b6b274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Aman Thomas",
      role: "Vehicle Dynamics Head",
      phone: "+91 8767836815",
      instagram: "https://www.instagram.com/a_mancr7/profilecard/?igsh=MW03c2dpYmZhNm02Ng==",
      linkedin: "https://www.linkedin.com/in/aman-thomas-685988256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Mitra Kishore",
      role: "Management Head",
      phone: "+91 99499 98282",
      instagram: "https://instagram.com/team_account",
      linkedin: "https://linkedin.com/company/team_account",
    },
    
  ];
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
    <section className="min-h-screen bg-black flex flex-col justify-between py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl text-gray-100 font-extrabold text-center mb-12">Meet Our Team</h1>
       
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
        <div className="p-12">
        <h1 className="text-5xl text-gray-100 font-extrabold text-center mb-12">Ex - Team Members</h1>
       
        <TeamMemberCard 
  key="x"
  member={{
    name: "Abhiraj Singh Thakur",
    role: "Ex-Team Captain",
    phone: "+91 94267 05266",
    instagram: "https://www.instagram.com/abhiraj_2678/profilecard/?igsh=MTMwMmlkcXlrdm5idA==",
    linkedin: "https://www.linkedin.com/in/abhiraj-thakur-730752250/?originalSubdomain=in"
  }}

/>
</div>

      </div>
      <div className="flex  justify-center  ">
      <img
        src="/teampic.jpg"
        alt="Gallery Image"
        className="w-96 object-cover rounded-lg cursor-pointer"
        onClick={() => openModal('/teampic.jpg')}
      />
    </div>
    </section>
  );
};
