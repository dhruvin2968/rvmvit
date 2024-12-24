import React from 'react';
import { Activity, Cpu, Wind, Zap, Thermometer, Wrench} from 'lucide-react';
import DepartmentCard from './DepartmentCard';

const departments = [
  {
    icon: Activity,
    title: "Vehicle Dynamics",
    description: "Optimizing motorcycle-rider-track interaction for peak performance, focusing on stability, handling, and traction to enhance lap times.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80"
  },
  {
    icon: Wrench,
    title: "Design",
    description: "Engineering structural components using advanced software for optimal performance and aesthetics, ensuring seamless integration.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
  },
  {
    icon: Wind,
    title: "Aerodynamics",
    description: "Developing fairings and airflow systems to balance downforce, reduce drag, and enhance cooling efficiency.",
    image: "https://images.unsplash.com/photo-1504239654963-c9df6405a208?auto=format&fit=crop&q=80"
  },
  {
    icon: Zap,
    title: "Powertrain",
    description: "Optimizing chain drive systems and power delivery for track-specific conditions and competitive performance.",
    image: "https://images.unsplash.com/photo-1630165146446-4a4b0b551c74?auto=format&fit=crop&q=80"
  },
  {
    icon: Thermometer,
    title: "Thermal",
    description: "Managing air-box, intake, fuel, exhaust, and cooling systems for optimal temperature regulation and performance.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80"
  },
  {
    icon: Cpu,
    title: "Electrical",
    description: "Designing and optimizing electrical systems, from ignition to sensor integration and ECU optimization.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
  },
  {
    icon: Cpu,
    title: "Brakes & Suspension",
    description: "Engineering safety and control systems for precision handling and reliable stopping power on the track.",
    image: "https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?auto=format&fit=crop&q=80"
  }
];

const TechnicalDepartments = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center mb-12">Technical Departments</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <DepartmentCard key={index} {...dept} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalDepartments;