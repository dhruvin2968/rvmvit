import { motion } from 'framer-motion';

const departments = [
  {
    name: "Management Domain",
    description: "This Domain ensures seamless coordination of all team operations. It organizes resources, plans logistics, secures sponsorships, and maintains budgets, creating an environment where technical and racing teams can focus on performance without distractions.",
    headImage: "/mgmt2.jpg"
  },
  {
    name: "Vehicle Dynamics Department",
    description: "The vehicle dynamics domain focuses on understanding and optimizing the interaction between the motorcycle's mechanical components, the rider, and the track to achieve peak performance. The goal is to maximize stability, handling, and traction, enabling the motorcycle to perform at its best in various racing conditions while providing the rider with precise control and feedback.",
    headImage: "/vehicle.jpg"
  },
  {
    name: "Design Department",
    description: "This department is tasked with engineering the motorcycle's structural components. The team uses advanced design software to ensure optimal performance and aesthetics by developing the chassis, swingarm, and other key elements. They effectively collaborate with other domains to integrate all components seamlessly, providing a well-balanced and efficient design.",
    headImage: "/design.jpg"
  },
  {
    name: " Aerodynamics Department",
    description: "This department is tasked with engineering the motorcycle's structural components. The team uses advanced design software to ensure optimal performance and aesthetics by developing the chassis, swingarm, and other key elements. They effectively collaborate with other domains to integrate all components seamlessly, providing a well-balanced and efficient design.",
    headImage: "/aero.jpg"
  },
  {
    name: " Powertrain Department",
    description: "This department is tasked with engineering the motorcycle's structural components. The team uses advanced design software to ensure optimal performance and aesthetics by developing the chassis, swingarm, and other key elements. They effectively collaborate with other domains to integrate all components seamlessly, providing a well-balanced and efficient design.",
    headImage: "/power.jpg"
  },
  {
    name: " Thermal Department",
    description: "This department is tasked with engineering the motorcycle's structural components. The team uses advanced design software to ensure optimal performance and aesthetics by developing the chassis, swingarm, and other key elements. They effectively collaborate with other domains to integrate all components seamlessly, providing a well-balanced and efficient design.",
    headImage: "/thermal.jpg"
  },
  {
    name: "Electrical Department",
    description: "This department is involved in optimizing the motorcycle's electrical systems, ensuring reliability, efficiency, and performance. Key focus areas include the ignition system, battery management, wiring harness development, sensor integration, electro-mechanical system integration, ECU optimization, and overall electrical safety.",
    headImage: "/electrical.jpg"
  }
  
];

const DepartmentCard = ({ department, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex flex-col md:flex-row gap-8 bg-gradient-to-r from-gray-100 to-gray-400 p-6 rounded-lg shadow-lg mb-8"
  >
    <div className="md:w-2/3">
      <h3 className="text-3xl text-black font-black mb-4">{department.name}</h3>
      <p className="text-Redd text-xl font-semibold">{department.description}</p>
    </div>
    <div className="md:w-1/3">
      <img
        src={department.headImage}
        alt=""
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>
  </motion.div>
);

export const Departments = () => {
  return (
    <div className="pt-20 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-gray-100 font-extrabold text-center mb-12">Our Departments</h1>
        <div className="grid grid-cols-1 gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} department={dept} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
