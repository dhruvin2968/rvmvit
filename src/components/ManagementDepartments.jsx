import React from 'react';
import { Briefcase, PiggyBank } from 'lucide-react';
import DepartmentCard from './DepartmentCard';

const departments = [
  {
    icon: Briefcase,
    title: "Logistics",
    description: "Managing travel, accommodations, and equipment transportation for races, ensuring smooth operations throughout the season.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80"
  },
  {
    icon: PiggyBank,
    title: "Finance",
    description: "Overseeing budgeting, fundraising, sponsorships, and financial forecasting for team stability and growth.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
  }
];

const ManagementDepartments = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center mb-12">Management Domain</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {departments.map((dept, index) => (
          <DepartmentCard key={index} {...dept} />
        ))}
      </div>
    </div>
  );
};

export default ManagementDepartments;